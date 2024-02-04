import {Router, Request, Response} from 'express'
import config from '../../config'
import OfferModel from '../../models/offer.model'

const offerModel = new OfferModel()

const routes = Router()

//create offer
routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const offer = await offerModel.create(req.body)
		res.json({
			status: 'success',
			data: {...offer},
			message: 'offer created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//get all offer
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const offer = await offerModel.getAll()
		res.json({
			status: 'success',
			data: offer,
			message: 'offer retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
//get specific offer
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const offer = await offerModel.getOne(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: offer,
			message: 'offer retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.get('/dev/:id', async (req: Request, res: Response, next) => {
	try {
		const offer = await offerModel.getDev(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: offer,
			message: 'offer Dev suc',
		})
	} catch (err) {
		next(err)
	}
})
//update offer
routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const offer = await offerModel.update(req.body)
		res.json({
			status: 'success',
			data: offer,
			message: 'offer updated successfully',
		})
	} catch (err) {
		next(err)
	}
})
//delete offer
routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const offer = await offerModel.delete(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: offer,
			message: 'offer deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})

export default routes
