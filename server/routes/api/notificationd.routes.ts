import {Router, Request, Response} from 'express'
import config from '../../config'
import NotificationDevModel from '../../models/notificationd.model'

const notificationDevModel = new NotificationDevModel()

const routes = Router()

//create notification Dev
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const notificationDev = await notificationDevModel.create(req.body)
		res.json({
			status: 'success',
			data: {...notificationDev},
			message: 'notificationDev created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get all
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const notificationDev = await notificationDevModel.getAll()
		res.json({
			status: 'success',
			data: notificationDev,
			message: 'notification Dev retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
//get specific
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const notificationDev = await notificationDevModel.getOne(
			req.params.id as unknown as string
		)
		res.json({
			status: 'success',
			data: notificationDev,
			message: 'notificationDev retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get company
routes.get('/dev/:dev', async (req: Request, res: Response, next) => {
	try {
		const notificationDev = await notificationDevModel.getDevId(
			req.params.dev as unknown as string
		)
		res.json({
			status: 'success',
			data: notificationDev,
			message: 'notificationDev retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.patch('/', async (req: Request, res: Response, next) => {
	try {
		const notificationDev = await notificationDevModel.update(req.body)
		res.json({
			status: 'success',
			data: notificationDev,
			message: 'notificationDev updated successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const notificationDev = await notificationDevModel.delete(
			req.params.id as unknown as string
		)
		res.json({
			status: 'success',
			data: notificationDev,
			message: 'notificationDev deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
