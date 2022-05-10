const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Connection a la base de donnée réussit"))
.catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running!");
})