import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ message: 'test' });
});

// WebSocket
// Usar io.emit quando é para transmitir para todos
io.on('connection', (socket) => {
  console.log('🟢 Novo cliente conectado', socket.id);

  socket.on('mensagem', (data) => {
    console.log('📨 Mensagem recebida:', data);
    io.emit('mensagemRecebida', data); // envia para todos
  });

  socket.on('disconnect', () => {
    console.log('🔴 Cliente desconectado', socket.id);
  });
});

// Não usa app.listen
httpServer.listen(PORT, () => {
  console.log(`Servidor com WebSocket rodando na porta ${PORT}`);
});
