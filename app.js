const express = require('express');
const path = require('path')
const app = express()

//module
const Place = require('./models/place'); 
const { default: mongoose } = require('mongoose');

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));


// route
app.get ('/', (req, res)=> {
  res.render('home')
});

// app.get('/seed/place', async (req, res) => {
//   const place = new Place({
//     title: 'Empire State Building',
//     price: '$20',
//     description: 'A great building',
//     location: 'New York, NY'
//   })

//   await place.save();
//   res.send(place)
// })

// connect to mongosee
mongoose.connect('mongodb://127.0.0.1/bestpoints')
.then((result) => {
  console.log('Connected to mongodb');
}).catch ((err) => {
  console.log(err);
})

app.listen (8000, () => {
  console.log('server running on http://127.0.0.1:3000');
})