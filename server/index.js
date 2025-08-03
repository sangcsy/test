const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/hello", (req, res) => {
    console.log("✅ /api/hello was called");
  res.json({ message: "Hello from Express!" });
});

app.get("/index", (req, res) => {
    console.log("✅ /index was called");
  res.json({ message: "testing now!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
