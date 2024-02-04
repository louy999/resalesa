import {Router, Request, Response} from 'express'
import config from '../../config'
import CallsModel from '../../models/calls.model'

const callsModel = new CallsModel()

const routes = Router()

//create users
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const calls = await callsModel.create(req.body)
		res.json({
			status: 'success',
			data: {...calls},
			message: 'calls created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get all
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const calls = await callsModel.getAll()
		res.json({
			status: 'success',
			data: calls,
			message: 'users retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
//get specific
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const calls = await callsModel.getOne(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: calls,
			message: 'calls retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get company
routes.get('/phone/:phone', async (req: Request, res: Response, next) => {
	try {
		const calls = await callsModel.getPhoneId(
			req.params.phone as unknown as string
		)
		res.json({
			status: 'success',
			data: calls,
			message: 'calls retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.patch('/', async (req: Request, res: Response, next) => {
	try {
		const calls = await callsModel.update(req.body)
		res.json({
			status: 'success',
			data: calls,
			message: 'calls updated successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const calls = await callsModel.delete(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: calls,
			message: 'calls deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
