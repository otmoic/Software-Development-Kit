import { ethers } from "ethers"
import needle from "needle"

export const getDidName = (privateKey: string) => new Promise<string | undefined>((resolve, reject) => {
    
    const w = new ethers.Wallet(privateKey)

    needle(
        'post',
        `https://did-support.ursa-services.bttcdn.com/find/owner/${w.address}`,
        {},
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    .then(resp => {
        if (resp.statusCode == 200 && resp.body.data != undefined && resp.body.data.length > 0) {
            resolve(resp.body.data[0].name)
        } else {
            resolve(undefined)
        }
    })
    .catch(error => {
        resolve(undefined)
    })
})