const express = require('express');
const path = require('path');
const router = express.Router();

// Rota para listar os vídeos disponíveis
router.get('/', (req, res) => {
  const videos = [
    { id: 1, title: 'Video 1', filePath: '/videos/video1.mp4' },
    // Adicione mais vídeos conforme necessário
  ];
  res.json(videos);
});

// Rota para servir o vídeo específico
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const videoPath = path.join(__dirname, '../../videos', `video${id}.mp4`);
  
  res.sendFile(videoPath, (err) => {
    if (err) {
      res.status(404).json({ message: 'Vídeo não encontrado' });
    }
  });
});

module.exports = router;
