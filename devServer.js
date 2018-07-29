var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var bodyParser = require('body-parser')
const request = require('request');


var app = express();
var compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('src/static'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/rateTravel', function(req,res){ 
const callback=(data,res)=>{
  res.send(data);
}
const response =  (req,res,callback)=>{ 
    request({
        method: 'POST',
        url:req.body.url,
        headers:req.body.headers,
        json:true,
        body:req.body.data  
          }, function(err,response){
            if(!err && response.statusCode === 200){
              callback(response.body, res);
            } else {
              callback(err, res);
            }              
        })         
  }
    response(req, res, callback);
  });

  app.post('/createCustomer', function(req,res){ 
    const callback=(data,res)=>{
      res.send(data);
    }
    const response =  (req,res,callback)=>{ 
        request({
            method: 'POST',
            url:req.body.url,
            headers:req.body.headers,
            json:true,
            body:req.body.data  
              }, function(err,response){
                if(!err && response.statusCode === 200){
                  callback(response.body, res);
                } else {
                  callback(err, res);
                }              
            })         
      }
        response(req, res, callback);
      });
  
  app.post('/payIssue', function(req,res){ 
    const callback=(data,res)=>{
      res.send(data);
    }
    const response =  (req,res,callback)=>{ 
        request({
            method: 'POST',
            url:req.body.url,
            headers:req.body.headers,
            json:true,
            body:req.body.data  
              }, function(err,response){
                if(!err && response.statusCode === 200){
                  callback(response.body, res);
                } else {
                  callback(err, res);
                }              
            })         
      }
        response(req, res, callback);
      });


app.post('/rateProf', function(req,res){
const callback=(data,res)=>{
  res.send(data);
}
const response =  (req,res,callback)=>{
    request({
          method: 'POST',
          url:req.body.url,
          headers:req.body.headers,
          json:true,
          body:req.body.data  
            }, function(err,response){
              if(!err && response.statusCode === 200){
                callback(response.body, res);
              } else {
                callback(err,res);
                return;
              }              
          })  
        }
    response(req, res, callback);    
  });

app.post('/rateRental', function(req,res){
  request({
        method: 'POST',
        url:req.body.url,
        headers:req.body.headers,
        json:true,
        body:req.body.data  
          }, function(err,response){
            if(!err && response.statusCode === 200){
              console.log(response); 
            } else {
              console.log(err);
              return;
            }              
        })         
  });
  
  const port = process.env.PORT || 3030;

  app.listen(port,function(){      
    //server.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
    });