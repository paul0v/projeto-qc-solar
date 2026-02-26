import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import User from '../models/User.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../../data/users.json');

export default class UserRepository {
    constructor() {
        this.users = [];
        // load existing data on startup
        this._load();
    }

    async _load() {
        try {
            const content = await fs.readFile(DATA_PATH, 'utf-8');
            this.users = JSON.parse(content);
        } catch (err) {
            if (err.code === 'ENOENT') {
                // file doesn't exist yet, initialize empty array
                this.users = [];
                await this._save();
            } else {
                console.error('Failed to load users.json:', err);
            }
        }
    }

    async _save() {
        await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
        await fs.writeFile(DATA_PATH, JSON.stringify(this.users, null, 2));
    }

    async getAll() {
        return this.users;
    }

    async add({ name, email, age }) {
        // basic uniqueness check by email
        if (this.users.some(u => u.email === email)) {
            throw new Error('Email já cadastrado');
        }
        const id = Date.now().toString();
        const user = new User({ id, name, email, age });
        this.users.push(user);
        await this._save();
        return user;
    }

    // additional helpers if needed
    async getById(id) {
        return this.users.find(u => u.id === id) || null;
    }
}
