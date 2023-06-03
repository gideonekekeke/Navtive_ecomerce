import mongoose from "mongoose";

const url_offfline = "mongodb://localhost/nativeEcomerce";

const dbConfig = () => {
	mongoose
		.connect(url_offfline)
		.then(() => {
			console.log("database is connected...");
		})
		.catch((err) => {
			console.log("an error occured");
		});
};

export default dbConfig;
