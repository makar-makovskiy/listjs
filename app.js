const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Раздача статических файлов
app.use(express.static(path.join(__dirname)));

// Все запросы перенаправляем на index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});