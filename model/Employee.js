const {Model, DataTypes} = require('sequelize');
const sequelize = require('../util/database');
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

module.exports = Employee;