const express = require("express");
const path = require("path");

const app = express();

app.use("/build", express.static(path.resolve(__dirname, "build")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));