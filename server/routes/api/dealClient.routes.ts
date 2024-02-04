import {Router, Request, Response} from 'express'
import config from '../../config'
import DealClientModel from '../../models/dealClient.model'
const dealClientModel = new DealClientModel()
const routes = Router()

//create users
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const user = await dealClientModel.create(req.body)
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
		const user = await dealClientModel.getAll()
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
		const user = await dealClientModel.getOne(req.params.id as unknown as string)
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
routes.get('/dev/:dev', async (req: Request, res: Response, next) => {
	try {
		const user = await dealClientModel.getDevId(
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
//get company
routes.get('/user/:user', async (req: Request, res: Response, next) => {
	try {
		const user = await dealClientModel.getUserId(
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
routes.get('/offer/:offer', async (req: Request, res: Response, next) => {
	try {
		const offer = await dealClientModel.getOfferId(
			req.params.offer as unknown as string
		)
		res.json({
			status: 'success',
			data: offer,
			message: 'offer retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await dealClientModel.delete(req.params.id as unknown as string)
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
