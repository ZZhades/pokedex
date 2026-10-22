const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const DIST = path.join(__dirname, 'dist', 'pokedex-angular');

// No revelar que el servidor usa Express
app.disable('x-powered-by');

// Entregar los archivos compilados de Angular
app.use(express.static(DIST));

// Cualquier otra ruta devuelve index.html (Angular maneja la navegación)
app.use((req, res) => {
  res.sendFile(path.join(DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`PokeDex escuchando en el puerto ${PORT}`);
});