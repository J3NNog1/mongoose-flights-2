import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()


//GET /flights
router.get('/', flightsCtrl.index)

// GET /flights/new
router.get('/new', flightsCtrl.new)

//get /flights/show
router.get('/:id', flightsCtrl.show)


//get /flights/:id/edit
router.get('/:id/edit', flightsCtrl.edit)

//put 

router.put('/:id', flightsCtrl.update)

//POST  /flights
router.post('/', flightsCtrl.create)

router.post('/:id/tickets', flightsCtrl.createTicket)

//Delete

router.delete('/:id', flightsCtrl.delete)





export {
	router
}