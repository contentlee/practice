const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use('/public', express.static(__dirname + '/public'));

app.listen(8080, function() {
  console.log('listening on 8080');
});

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

app.get('/bgImg', function(req, res){
  res.sendFile(__dirname+'/bgattachment.html')
})
app.get('/popup', function(req, res){
  res.sendFile(__dirname+'/popUp.html')
})
app.get('/carousel', function(req, res){
  res.sendFile(__dirname+'/slide.html')
})