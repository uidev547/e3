var index = require('./routes/index');
var users = require('./routes/users');
app.use('/e3', index);
app.use('/e3users', users);
