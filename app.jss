const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

  res.end(JSON.stringify({
    mensagem: "Gerador de sites da loja funcionando!",
    status: "online"
  }));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});
