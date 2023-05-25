import CryptoModel from "~/server/models/Crypto.model";

export default defineEventHandler( async (event) => {
    const body = await readBody(event)
    try {
        const crypto = await CryptoModel.create(body)
        return {
            crypto: crypto,
            message: "crypto ajoutée"
        }
    } catch (e:any) {
        throw createError({
            message: e.message,
			statusCode: 400,
			statusMessage: '',
			fatal: false,
        })
    }
})