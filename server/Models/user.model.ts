import { Schema, model, Document } from "mongoose";

interface UserData {
	name: string;
	email: string;
	password: string;
}

interface mainData extends UserData, Document {}

const mySchema = new Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},
});

export default model<mainData>("users", mySchema);
