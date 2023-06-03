import { RegisterUser } from "../Controllers/auth.controller";
import express from "express";
const router = express.Router();

router.post("/register", RegisterUser);

export default router;
