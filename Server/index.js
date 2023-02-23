const app = require("express")();
const port = process.env.PORT || 5000;
const chats = require("./data/data");

app.get("/", (req, res) => {
  res.send(`<h1>Socketer app is running</h1>`);
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.filter((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
