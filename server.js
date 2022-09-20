//Import modules
import express from 'express'

//Import Data
import { coffee } from './data/coffee-data.js'

//Create Express app
const app = express()

//Configure the app (app.set)
app.set('view engine', 'ejs')

//Mount Middleware (app.use)

//Mount routes
app.get('/', function(req, res) {
  res.send('<h1>hello, friend</h1>')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/coffee', function(req, res) {
  res.render('coffee-data/index', {
    coffee: coffee
  })
})

//Listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000')
})