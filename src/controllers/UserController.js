import UserRepository from '../repositories/UserRepository.js';

class UserController {
    constructor() {
        this.repo = new UserRepository();
    }

    async getAll(req, res) {
        try {
            const users = await this.repo.getAll();
            res.json({ data: users, count: users.length });
        } catch (err) {
            res.status(500).json({ message: 'Erro interno ao listar usuários' });
        }
    }

    async create(req, res) {
        const { name, email, age } = req.body;
        if (!name || !email || !age) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }
        try {
            const user = await this.repo.add({ name, email, age });
            res.status(201).json({ message: 'Usuário cadastrado com sucesso!', data: user });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default new UserController();
