import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routers/posts.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));



try {
    //// mongosh "mongodb://localhost:27017"
  mongoose.connect(
    "mongodb://localhost:27017/admin",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to DB");
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        //localhost:5000/
      });

    }
  );
} catch (error) {
  console.log("Could not connect to DB");
}

app.get("/", (req, res) => {
    res.send("SUCCESS");
  });
  
app.use("/posts", posts);


