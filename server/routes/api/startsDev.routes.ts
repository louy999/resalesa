import {Router, Request, Response} from 'express'
import config from '../../config'
import StartsDevModel from '../../models/startsDev.model'
const startsDevModel = new StartsDevModel()

const routes = Router()

//create users
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const user = await startsDevModel.create(req.body)
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
		const user = await startsDevModel.getAll()
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
		const user = await startsDevModel.getOne(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: user,
			message: 'user retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get company
routes.get('/user/:user', async (req: Request, res: Response, next) => {
	try {
		const user = await startsDevModel.getUserId(
			req.params.user as unknown as string
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
routes.get('/dev/:dev', async (req: Request, res: Response, next) => {
	try {
		const user = await startsDevModel.getDevId(
			req.params.dev as unknown as string
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

routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await startsDevModel.delete(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: user,
			message: 'user deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
