import { Request, Response } from "express";
import userModel from "../Models/user.model";

export const RegisterUser = async (req: Request, res: Response) => {
	try {
		const { name, email, password } = req.body;

		const result = await userModel.create({
			name,
			email,
			password,
		});

		return res.status(200).json({
			message: "success please check your mail to verify your account",
		});
	} catch (err) {
		return res.status(404).json({
			message: "an error occured",
		});
	}
};
