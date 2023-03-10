import { Task } from '../models';

const TaskController = {
	async index(req, res, next) {
		try {
			const tasks = await Task.findAll();
			return res.json(tasks);
		} catch (error) {
			return next(error);
		}
	},

	async show(req, res, next) {
		try {
			const task = await Task.findOne({
				where: {
					id: req.params.id,
				},
			});

			return res.json(task);
		} catch (error) {
			return next(error);
		}
	},

	async store(req, res, next) {
		try {
			const task = await Task.create({
				title: 'test',
				description: 'description',
			});

			return res.json(task);
		} catch (error) {
			return next(error);
		}
	},

	async update(req, res, next) {
		try {
			const task = await Task.update(
				{
					title: 'test2',
					description: 'description',
				},
				{
					where: {
						id: req.params.id,
					},
				}
			);

			return res.json(task);
		} catch (error) {
			return next(error);
		}
	},

	async destroy(req, res, next) {
		try {
			const result = await Task.destroy({
				where: {
					id: req.params.id,
				},
			});

			return res.json(result);
		} catch (error) {
			return next(error);
		}
	},
};

export default TaskController;
