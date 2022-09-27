import { Flight } from "../models/flight.js"



function newFlight(req, res) {
  res.render('flights/new', {
    title: 'All Flights'
  })

}

export {
  newFlight as new,
}