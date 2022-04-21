import express from 'express';
import controller from '../controllers/mobile'

const router = express.Router();

router.get('/mobile', controller.getAll);
router.post('/mobile', controller.create);
router.patch('/mobile/:id', controller.update);
router.delete('/mobile/:id', controller.remove);
router.get('/mobile/:id', controller.get);

export = router;