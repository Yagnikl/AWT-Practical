require("dotenv").config();
const express = require("express");
const connectDB = require("./db/configDB");
const userRoutes = require("./Routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB(); // Connect to MongoDB

app.use(express.json());
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
