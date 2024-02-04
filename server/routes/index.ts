import {Router} from 'express'
import usersRoutes from './api/users.routes'
import developerRoutes from './api/developer.routes'
import offerRoutes from './api/offer.routes'
import requestRoutes from './api/request.routes'
import notificationcRoutes from './api/notificationc.routes'
import commentRoutes from './api/comment.routes'
import notificationdRoutes from './api/notificationd.routes'
import followRoutes from './api/follow.routes'
import likedRoutes from './api/liked.routes'
import startsDevRoutes from './api/startsDev.routes'
import startsOfferRoutes from './api/startsOffer.routes'
import viewsRoutes from './api/views.routes'
import callsRoutes from './api/calls.routes'
import dealDevRoutes from './api/dealDev.routes'
import dealClientRoutes from './api/dealClient.routes'
import cashBack from './api/cash.routes'

const routes = Router()
routes.use('/users', usersRoutes)
routes.use('/dev', developerRoutes)
routes.use('/offer', offerRoutes)
routes.use('/req', requestRoutes)
routes.use('/not/client', notificationcRoutes)
routes.use('/comment', commentRoutes)
routes.use('/not/dev', notificationdRoutes)
routes.use('/follow', followRoutes)
routes.use('/liked', likedRoutes)
routes.use('/starts/dev', startsDevRoutes)
routes.use('/starts/offer', startsOfferRoutes)
routes.use('/views', viewsRoutes)
routes.use('/calls', callsRoutes)
routes.use('/deal/dev', dealDevRoutes)
routes.use('/deal/client', dealClientRoutes)
routes.use('/cash', cashBack)

export default routes
