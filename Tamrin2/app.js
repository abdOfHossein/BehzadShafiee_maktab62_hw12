const createError = require('http-errors');
const express = require('express');
const path = require('path');
const app = express();
const loginRouter=require(path.join(__dirname,"routes","loginRouter.js"));
const regRouter=require(path.join(__dirname,"routes","regRouter.js"));
const PORT=process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'view',"pageLogin"));
// app.set('views', path.join(__dirname, 'view',"pageRegister"));
app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'view',"pageRegister")));
app.use(express.static(path.join(__dirname, 'view',"pageLogin")));


app.use('/', loginRouter);
app.use('/', regRouter);

app.listen(PORT,()=>{

  console.log(`server is running on port:${PORT}`);
})


















// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });


// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


