var index = require('./routes/index');
var users = require('./routes/users');
var path = require('path');
module.exports = {
	init: function function_name(app) {
		app.use('/e3', index);
		app.use('/e3users', users);	
	}
};
