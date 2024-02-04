import {Router, Request, Response} from 'express'
import config from '../../config'
import CashModel from '../../models/cash.model'

const cashModel = new CashModel()

const routes = Router()

//create users
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const cash = await cashModel.create(req.body)
		res.json({
			status: 'success',
			data: {...cash},
			message: 'cash created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get all
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const cash = await cashModel.getAll()
		res.json({
			status: 'success',
			data: cash,
			message: 'users retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})

routes.patch('/', async (req: Request, res: Response, next) => {
	try {
		const cash = await cashModel.update(req.body)
		res.json({
			status: 'success',
			data: cash,
			message: 'cash updated successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const cash = await cashModel.delete(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: cash,
			message: 'cash deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
