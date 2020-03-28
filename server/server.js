const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors')

const app = express();

connectDB();

// Init middleware
app.use(express.json({ extended: false }));
app.use(cors())
app.get("/", (req, res) => res.send("API running..."));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
