// Add dependencies
const express = require("express");
const path = require("path");

const app = express();

// Set link for static folder
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// Set to 1 page app
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

// Run on 5080
app.listen(process.env.PORT || 5080, () => console.log("Server running ..."));
