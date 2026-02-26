import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './src/routes/userRoutes.js';

// __dirname helper for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serve frontend files
app.use(express.static(path.join(__dirname, 'public')));

// mount API routes
app.use('/api/users', userRoutes);

// simple health check
app.get('/hello', (req, res) => {
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
