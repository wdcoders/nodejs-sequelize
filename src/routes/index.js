import { Router } from 'express';
import { TaskController } from '../app/controllers';
const router = Router();

router.get('/tasks', TaskController.index);
router.get('/tasks/:id', TaskController.show);
router.post('/tasks', TaskController.store);
router.put('/tasks/:id', TaskController.update);
router.delete('/tasks/:id', TaskController.destroy);

export default router;
