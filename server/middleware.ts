import express, { Application } from "express";
import cors from "cors";
import auth from "./Routes/user.route";

export const middleware = (app: Application) => {
	app.use(express.json()).use(cors()).use("/api/user", auth);
};
