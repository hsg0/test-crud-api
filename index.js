require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/productRoute");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const db = process.env.DBURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Database connected");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });

app.use("/api/product", router);

// Optional Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
