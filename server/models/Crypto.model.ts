import { Document, model, Schema} from "mongoose"

export interface ICrypto extends Document {
    name: string,
    costPrice: number,
    quantity: number
}

const CryptoSchema = new Schema ({
    name: String,
    costPrice: Number,
    quantity: Number,
})

export default model<ICrypto>("Crypto", CryptoSchema);