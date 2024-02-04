import {Router, Request, Response} from 'express'
import config from '../../config'
import ViewsModel from '../../models/views.model'

const viewsModel = new ViewsModel()

const routes = Router()

//create users
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const user = await viewsModel.create(req.body)
		res.json({
			status: 'success',
			data: {...user},
			message: 'user created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get all
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const user = await viewsModel.getAll()
		res.json({
			status: 'success',
			data: user,
			message: 'users retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
//get specific
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await viewsModel.getOne(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: user,
			message: 'user retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.get('/offer/:offer', async (req: Request, res: Response, next) => {
	try {
		const user = await viewsModel.getOfferId(
			req.params.offer as unknown as string
		)
		res.json({
			status: 'success',
			data: user,
			message: 'user retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
