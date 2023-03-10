import express from 'express';
import { PORT } from './config';
import router from './routes/index';
import { sequelize } from './app/models/db';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', router);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
