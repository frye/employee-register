const Department = require('./model/Department');
const Role = require('./model/Role');
const Employee = require('./model/Employee');
const db = require('./util/database');

// Remove force: true and bulk data creation once testing is done
db.sync({force: true})
	.then(() => {
		console.log('Database connected, inserting sample data...');
		return Department.bulkCreate([
			{name: 'Engineering'},
			{name: 'HR'},
			{name: 'Sales'},
			{name: 'Marketing'},
			{name: 'IT'},
			{name: 'Accounting'},
		]);
	}
	).then(() => {
		return Role.bulkCreate([
			{title: 'CEO', salary: 100000, departmentId: 1},
			{title: 'CTO', salary: 80000, departmentId: 1},
			{title: 'COO', salary: 70000, departmentId: 1},
			{title: 'CMO', salary: 60000, departmentId: 1},
			{title: 'CXO', salary: 50000, departmentId: 1},
			{title: 'HR Manager', salary: 40000, departmentId: 2},
			{title: 'HR Assistant', salary: 30000, departmentId: 2},
			{title: 'Sales Manager', salary: 20000, departmentId: 3},
			{title: 'Sales Assistant', salary: 10000, departmentId: 3},
			{title: 'Marketing Manager', salary: 20000, departmentId: 4},
			{title: 'Marketing Assistant', salary: 10000, departmentId: 4},
			{title: 'IT Manager', salary: 20000, departmentId: 5},
			{title: 'IT Assistant', salary: 10000, departmentId: 5},
			{title: 'Accounting Manager', salary: 20000, departmentId: 6},
			{title: 'Accounting Assistant', salary: 10000, departmentId: 6},
		]);	
	})
	.then(() => {
		return Employee.bulkCreate([
			{first_name: 'John', last_name: 'Doe', role_id: 1, manager_id: null},
			{first_name: 'Jane', last_name: 'Doe', role_id: 2, manager_id: 1},
			{first_name: 'Jack', last_name: 'Doe', role_id: 3, manager_id: 1},
			{first_name: 'Jill', last_name: 'Doe', role_id: 4, manager_id: 1},
			{first_name: 'Joe', last_name: 'Doe', role_id: 5, manager_id: 1},
			{first_name: 'Jenny', last_name: 'Doe', role_id: 6, manager_id: 1},
			{first_name: 'John', last_name: 'Doe', role_id: 7, manager_id: 2},
			{first_name: 'Jane', last_name: 'Doe', role_id: 8, manager_id: 2},
			{first_name: 'Jack', last_name: 'Doe', role_id: 9, manager_id: 2},
			{first_name: 'Jill', last_name: 'Doe', role_id: 10, manager_id: 2},
			{first_name: 'Joe', last_name: 'Doe', role_id: 11, manager_id: 2},
			{first_name: 'Jenny', last_name: 'Doe', role_id: 12, manager_id: 2},
			{first_name: 'John', last_name: 'Doe', role_id: 13, manager_id: 3},
			{first_name: 'Jane', last_name: 'Doe', role_id: 14, manager_id: 3},
			{first_name: 'Jack', last_name: 'Doe', role_id: 15, manager_id: 3},
		]);
	})
	.catch(err => console.log(err));