require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());

//database
const connectDb = require("./db/connect");

//router
const authRouter = require("./routes/authRoutes");

//routes
app.get("/", (req, res) => {
  res.send("<h1>Acadmates</h1>");
});

app.use("/api/auth", authRouter);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    console.log("Connected to the Db...");
    app.listen(port, () => {
      console.log(`Server is listening at port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
