const mongoose = require('mongoose');

// connect to mongoose
// ==============================================
// mongoose.connect('mongodb://localhost/ernicommunity')
mongoose.connect('mongodb://erni:erni123456@ds115762.mlab.com:15762/ernicommunity')
.then(() => {
    console.log('Connect to mongodb success!');
})
.catch((err) => {
    console.log('err: ', err);
});

module.exports = mongoose;