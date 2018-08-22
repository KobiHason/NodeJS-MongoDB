var express      = require('express');
var mongoose     = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./model/userschema');

var app = express();
var port=3000;
var Schema = mongoose.Schema;




var db='mongodb://Your user name : Your password @ds125938.mlab.com:25938/Name of your DB';

mongoose.Promise = global.Promise;

mongoose.connect( db ,function(err){
  if (err) {console.log(err);}
else { console.log(" Db is connected");}
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/addinfo', (req,res) => {
  var user= new User(req.body);
  user.save()
  .then(item => { res.send("Data was add :-)"); })
    .catch(err => {  res.status(400).send("Data was NOT save :-( ");
      console.log(err);
        });
     });


app.get('/getinfo', function(req, res, next) {
       User.find({ } , function(err, User)     { 
       if (err){console.log("404 Sorry "); console.log(err);  }
              else {console.log("The data was found"); console.log(User);
          res.render(" any route ", {User : User });
      } });
     });



app.get('/', function(req, res) 
	 {    res.render('index.html');  }
});


app.listen(port ,function(err){
  if (err) throw err;
  console.log("server is running on port:" + " " + port );
});

