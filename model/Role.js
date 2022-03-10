const {Model, DataTypes} = require('sequelize');
const sequelize = require('../util/database');
class Role extends Model {};

Role.init(
	{
		title: DataTypes.STRING,
		salary: DataTypes.DECIMAL,
		departmentId: DataTypes.INTEGER,
	},
	{
		sequelize,
		tableName: 'role',
	}
);

module.exports = Role;