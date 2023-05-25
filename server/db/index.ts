import mongoose from "mongoose";
import { Nitro } from "nitropack";

export default async (_nitroApp: Nitro) => {
	const { MONGO_URI } = useRuntimeConfig();
	mongoose
		.connect(MONGO_URI)
		.then(() => console.log(`Connected to DB`))
		.catch((e) => console.log(e));
};