import multer from 'multer'
import path from 'path'
import sharp from 'sharp'

// Middleware to resize the image before saving
const resizeImage = (req: any, res: any, next: any) => {
	if (!req.file) {
		return next()
	}

	const {path: imagePath, filename} = req.file

	// Resize the image using Sharp
	sharp(imagePath)
		.resize({width: 300, height: 300})
		.toFile(path.join('./uploads/', filename), (err) => {
			if (err) {
				return next(err)
			}

			next()
		})
}

const storage = multer.diskStorage({
	// destination: (req, file, cb) => {
	// 	cb(null, './uploads/')
	// },
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	},
})

const upload = multer({
	storage,
	fileFilter: (_req, file, cb: any) => {
		const filetypes = /jpeg|jpg|png/
		const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
		const mimetype = filetypes.test(file.mimetype)

		if (mimetype && extname) {
			return cb(null, true)
		} else {
			cb('Error: Images Only!')
		}
	},
})

export default [upload.single('image'), resizeImage]
