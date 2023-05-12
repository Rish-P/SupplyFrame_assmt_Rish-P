
const { app } = require('./app');
//add the router 
// app.use('/', router); 
app.listen(process.env.port || 3000);
console.log('Running at Port 3000'); 
