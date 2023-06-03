import express from "express";
import mongoose from "mongoose";
import { middleware } from "./middleware";
import dbConfig from "./Utils/dbConfig";
const port = process.env.PORT || 3344;

const app = express();
dbConfig();

middleware(app);

const server = app.listen(port, () => {
	console.log(`listening on port`);
});
