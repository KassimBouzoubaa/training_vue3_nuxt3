export const crypto = () => {


const addCrypto = async ( 
    name: string,
    costPrice: number,
    quantity: number
) => {
    try {
        const data: any = await $fetch("api/crypto/create", {
            method: "POST",
            body:{
                name,
                costPrice,
                quantity
            }
        });
        return {crypto : data.crypto}
    } catch(error) {
        return error
    }
}
}