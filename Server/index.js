const app = require("express")();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`<h1>Socketer app is running</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
