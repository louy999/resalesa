import {Router, Request, Response} from 'express'
import config from '../../config'
import UserModel from '../../models/user.model'
const userModel = new UserModel()

const routes = Router()

//create Client
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const user = await userModel.create(req.body)
		res.json({
			status: 'success',
			data: {...user},
			message: 'user created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get all client
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const user = await userModel.getAll()
		res.json({
			status: 'success',
			data: user,
			message: 'users retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
//get specific client
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await userModel.getOne(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: user,
			message: 'user retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get client by email
routes.get('/email/:email', async (req: Request, res: Response, next) => {
	try {
		const user = await userModel.getOneFromEmail(
			req.params.email as unknown as string
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
// get client by phone
routes.get('/phone/:phone', async (req: Request, res: Response, next) => {
	try {
		const user = await userModel.getOneFromPhone(
			req.params.phone as unknown as string
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
// update client
routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await userModel.update(req.body)
		res.json({
			status: 'success',
			data: user,
			message: 'user updated successfully',
		})
	} catch (err) {
		next(err)
	}
})
// delete client
routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await userModel.delete(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: user,
			message: 'user deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})
//auth client
routes.post('/auth', async (req: Request, res: Response, next) => {
	try {
		const {email, password} = req.body
		const user = await userModel.auth(email, password)
		if (!user) {
			return res.status(401).json({
				status: 'error',
				message: 'the username and password do not match please try agin',
			})
		}
		res.json({
			status: 'success',
			data: {...user},
			message: 'user auth successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
