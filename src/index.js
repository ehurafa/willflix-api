const express = require('express');
const cors = require('cors');
const videosRoutes = require('./routes/videos');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota para os vídeos
app.use('/api/videos', videosRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
