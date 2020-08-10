import Express from 'express';

var app =Express();
app.set('view engine', 'ejs');
const port =4040;

app.get('/' ,(req,res) => {
  res.send('i am new here')
})

app.get('/profile/:name', (req, res) => {
  res.render('profile.ejs', {person : req.params.name});
})



app.listen(port, ()=> console.log("listening on port" + port))
