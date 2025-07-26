import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/api/ping', (req, res) => {
  res.json({ message: 'test' });
});

app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});
