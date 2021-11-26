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

app.get('/scroll1', function(req, res){
  res.render('./scroll.html')
})