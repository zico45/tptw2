const express = require("express")
const path = require('path')
const server = express();

server.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
server.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
server.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
server.use('/tw', express.static(path.join(__dirname, 'public')))
server.use('/img', express.static(path.join(__dirname, 'public/images')))

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});

server.get("/fleurs", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/fleurs.html'))
});

server.get("/fleurs-tw", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/fleurs-tw.html'))
});

server.listen(5000, () => {
  console.log('Listening on port ' + 5000);
});