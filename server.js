var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded ({ extended:true }));


app.get('/', function (req, res) {
  res.sendfile("./app/public/home.html")
})

app.get('/survey', function (req, res) {
  res.sendfile("./app/public/survey.html")
})


app.post('/api/friends', function (req, res){

    var userScore = eval(req.body.scores.toString().replace(/,/g,'+'))

    if ( userScore < 10) {
        res.json({
                    name:"your mom",
                    image:"https://media.tenor.co/images/da7545b56c287892a6aebdf409fcb36d/raw"
                })
    } else if(userScore >= 10 && userScore < 20) {
        res.json({
                    name:"your mother",
                    image:"http://img1.izismile.com/img/img8/20150815/1000/weird_gifs_that_will_make_you_say_wtf_20.gif"
                })
    } else if (userScore >= 20 && userScore < 30){
        res.json({
                    name:"your dad",
                    image:"http://img1.izismile.com/img/img8/20150815/1000/weird_gifs_that_will_make_you_say_wtf_16.gif"
                })
    } else if (userScore >= 30 && userScore < 40){
        res.json({
                    name:"your kid",
                    image:"http://img1.izismile.com/img/img8/20150815/1000/weird_gifs_that_will_make_you_say_wtf_43.gif"
                })
    } else {
        res.json({
                    name:"your beard",
                    image:"http://www.teamjimmyjoe.com/wp-content/uploads/2015/08/ron-swanson-mustache.gif"
                })
    }

}) //post

app.listen(3000)
