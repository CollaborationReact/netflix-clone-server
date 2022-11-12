import express from "express";
import mongoose, { mongo } from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import postsRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

// const CONNECTION_URL;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>
//		app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
//	).catch((error) => console.log(error.message));