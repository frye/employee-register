const {Model, DataTypes} = require('sequelize');
const sequelize = require('../util/database');
class Department extends Model {};

Department.init(
	{
		name: DataTypes.STRING,
	},
	{
		sequelize
	}
);

module.exports = Department;