const express = require("express");
const app = express();
const port = 1995;

app.get("/data", (req, res) => {
  res.json({ message: "helloWorld" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
