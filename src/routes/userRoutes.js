import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const router = Router();

// GET /api/users - lista todos os usuários
router.get('/', UserController.getAll.bind(UserController));

// POST /api/users - cria um novo usuário
router.post('/', UserController.create.bind(UserController));

export default router;
