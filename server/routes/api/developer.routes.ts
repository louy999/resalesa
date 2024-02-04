import {Router, Request, Response} from 'express'
import config from '../../config'
import DeveloperModel from '../../models/developer.model'

const developerModel = new DeveloperModel()

const routes = Router()

//create developer
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const developer = await developerModel.create(req.body)
		res.json({
			status: 'success',
			data: {...developer},
			message: 'developer created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get all
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const developer = await developerModel.getAll()
		res.json({
			status: 'success',
			data: developer,
			message: 'users retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
//get specific
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const developer = await developerModel.getOne(
			req.params.id as unknown as string
		)
		res.json({
			status: 'success',
			data: developer,
			message: 'developer retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
// get developer by name
routes.get('/name/:name', async (req: Request, res: Response, next) => {
	try {
		const developer = await developerModel.getName(
			req.params.name as unknown as string
		)
		res.json({
			status: 'success',
			data: developer,
			message: 'developer retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
// update developer
routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const developer = await developerModel.update(req.body)
		res.json({
			status: 'success',
			data: developer,
			message: 'developer updated successfully',
		})
	} catch (err) {
		next(err)
	}
})
//delete developer
routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const developer = await developerModel.delete(
			req.params.id as unknown as string
		)
		res.json({
			status: 'success',
			data: developer,
			message: 'developer deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
