var index = require('./routes/index');
var users = require('./routes/users');
module.exports = {
	init: function function_name(app) {
		app.use('/e3', index);
		app.use('/e3users', users);	
	}
};
