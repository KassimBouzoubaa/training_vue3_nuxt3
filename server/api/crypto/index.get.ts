import CryptoModel from "~~/server/models/Crypto.model";

export default defineEventHandler(async (event) => {
	return await CryptoModel.find();
});