var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/juggling-trick', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']

  // Check whether the variable matches a condition
  if (jugglingBalls == "3 or more"){
    // Send user to next page
    res.redirect('/juggling-trick')
  } else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})

//router.post('/check-your-answers', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  //var jugglinglocation = req.session.data['juggling-location']

  // Check whether the variable matches a condition
  //if (jugglinglocation == "England"){
    // Send user to next page
    //res.redirect('/Select-city-eng')
  //} else if (jugglinglocation == "Scotland"){
    // Send user to next page
    //res.redirect('/Select-city-scot')
  //} else if (jugglinglocation == "Wales"){
    // Send user to next page
    //res.redirect('/Select-city-wales')
  //} else {
    // Send user to ineligible page
  //  res.redirect('Select-city-NI')
 // }
//})

module.exports = router
