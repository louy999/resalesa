import {Router, Request, Response} from 'express'
import config from '../../config'
import RequestModel from '../../models/request.model'

const requestModel = new RequestModel()

const routes = Router()

//create users
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const request = await requestModel.create(req.body)
		res.json({
			status: 'success',
			data: {...request},
			message: 'request created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get all
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const request = await requestModel.getAll()
		res.json({
			status: 'success',
			data: request,
			message: 'users retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
//get specific
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const request = await requestModel.getOne(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: request,
			message: 'request retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
// //get company
routes.get('/client/:client_id', async (req: Request, res: Response, next) => {
	try {
		const request = await requestModel.getClientId(
			req.params.client_id as unknown as string
		)
		res.json({
			status: 'success',
			data: request,
			message: 'request retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const request = await requestModel.update(req.body)
		res.json({
			status: 'success',
			data: request,
			message: 'request updated successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const request = await requestModel.delete(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: request,
			message: 'request deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
