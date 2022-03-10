const Department = require('./model/Department');
const db = require('./util/database');

db.sync()
	.then(() => console.log('Database connected'))
	.catch(err => console.log(err));