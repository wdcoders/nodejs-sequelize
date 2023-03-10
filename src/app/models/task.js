import Sequelize from 'sequelize';
import { sequelize } from './db';

const Task = sequelize.define(
	'tasks',
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		title: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.TEXT,
		},
		status: {
			type: Sequelize.INTEGER,
			defaultValue: 1,
		},
	},
	{ timestamps: true, underscored: true }
);

export default Task;
