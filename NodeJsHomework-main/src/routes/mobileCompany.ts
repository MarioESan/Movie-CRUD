import express from 'express';
import controller from '../controllers/mobileCompany'

const router = express.Router();

router.get('/mobileCompany', controller.getAll);
router.post('/mobileCompany', controller.create);
router.patch('/mobileCompany/:id', controller.update);
router.delete('/mobileCompany/:id', controller.remove);
router.get('/mobileCompany/:id', controller.get);

export = router;