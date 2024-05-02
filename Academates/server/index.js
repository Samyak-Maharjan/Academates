import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//database
import connectDb from "./db/connect.js";

//router
import authRouter from "./routes/authRoutes.js";
import AccountRoute from "./routes/Account.js";

//routes
app.get("/", (req, res) => {
  res.send("<h1>Acadmates</h1>");
});

app.use("/api/auth", authRouter);
app.use("/auth", AccountRoute);

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
