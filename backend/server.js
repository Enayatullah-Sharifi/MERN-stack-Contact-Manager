import express from "express";
import dotenv from "dotenv";
import color from "colors";
import connectDB from "./server/db/db.js";
import router from "./server/routes/contactRoute.js";
import cors from "cors";
import bodyParser from "body-parser";
import errorHandler from "./middleware/errorHandling.js";

const app = express();
app.use(cors());
dotenv.config("");
app.use(express.json());
app.use(bodyParser.json());

connectDB();
app.use("/", router);
app.use(errorHandler);

const port = process.env.PORT || 1000;
app.listen(port, () =>
  console.log(`Server running on port ${port}`.bold.underline.yellow)
);
