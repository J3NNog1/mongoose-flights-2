import { Flight } from "../models/flight.js"



function newFlight(req, res) {
  res.render('flights/new', {
    title: 'All Flights'
  })
}
function create(req, res) {
// convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing
// replace and split if it's not an empty string
  if (req.body.cast) {
  // remove whitespace next to commas
  req.body.cast = req.body.cast.split(', ')
  }
  Flight.create(req.body)
  .then(flight => { 
    console.log(flight)
    res.redirect(`/flights/new`)
  })
  .catch(err => {
    res.redirect('/flights/new')
  })
}


export {
  newFlight as new,
  create,
}