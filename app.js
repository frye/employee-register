const Department = require('./model/Department');
const Role = require('./model/Role');
const Employee = require('./model/Employee');
const db = require('./util/database');

db.sync({force: true})
	.then(() => console.log('Database connected'))
	.catch(err => console.log(err));