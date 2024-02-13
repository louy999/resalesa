import {Router, Request, Response} from 'express'
import config from '../../config'
import StartsOfferModel from '../../models/startOffer.model'
const startsOfferModel = new StartsOfferModel()

const routes = Router()

//create users
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const user = await startsOfferModel.create(req.body)
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
		const user = await startsOfferModel.getAll()
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
		const user = await startsOfferModel.getOne(req.params.id as unknown as string)
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
		const user = await startsOfferModel.getUserId(
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
		const user = await startsOfferModel.getOfferId(
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
routes.get('/oau/:offer/:user', async (req: Request, res: Response, next) => {
	try {
		const user = await startsOfferModel.getSpsOfferAndUser(
			req.params.offer as unknown as string,
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

routes.patch('/', async (req: Request, res: Response, next) => {
	try {
		const user = await startsOfferModel.update(req.body)
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
		const user = await startsOfferModel.delete(req.params.id as unknown as string)
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
