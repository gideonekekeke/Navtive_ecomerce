import express from "express";
import mongoose from "mongoose";
import { middleware } from "./middleware";
const port = process.env.PORT || 3344;

const app = express();

middleware(app);

const server = app.listen(port, () => {
	console.log(`listening on port`);
});
