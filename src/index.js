const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// app.get('/api/v1/blogs', (req, res) => {});
// app.post('/api/v1/blogs', (req, res) => {});
// app.put('/api/v1/blogs', (req, res) => {});
// app.delete('/api/v1/blogs', (req, res) => {});

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the sever on PORT : ${ServerConfig.PORT}`);
});

// cmd "/C TASKKILL /IM node.exe /F"
