const {Model, DataTypes} = require('sequelize');
const sequelize = require('../util/database');
const Role = require('./Role');
class Employee extends Model {};

Employee.init(
	{
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		role_id: DataTypes.INTEGER,
		manager_id: DataTypes.INTEGER,
	},
	{
		sequelize,
		tableName: 'employee',
	}
);

Employee.belongsTo(Employee, {as: 'manager'});
Employee.belongsTo(Role);

module.exports = Employee;