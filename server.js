const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota para o manifest.json
app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'manifest.json'));
});

// Rota para o service worker
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'service-worker.js'));
});

// Iniciar o servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Acesse no celular usando o IP do computador:${PORT}`);
});