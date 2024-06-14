
export const getChainId = (system_chain_id: number, network: string) => {
    const isMainnet = network == 'mainnet'
    switch (system_chain_id) {
        case 9006:
            return isMainnet ? 56 : 97
        case 9000:
            return isMainnet ? 43114 : 43113
        case 966:
            return isMainnet ? 137 : 80001
        case 60:
            return isMainnet ? 1 : 11155111
        case 614:
            return isMainnet ? 10 : 11155420
        default:
            break;
    }
}

export const getStepTimeLock = (system_chain_id_src: number, system_chain_id_dst: number): number => {
    let srcTimeLock = 0
    switch (system_chain_id_src) {
        case 9000:
            srcTimeLock = 2 * 60;
            break;
        case 9006:
            srcTimeLock = 1 * 60;
            break;
        case 614:
            srcTimeLock = 1 * 60;
            break;
        case 60:
            srcTimeLock =  4 * 60;
            break;
        case 966:
            srcTimeLock =  1 * 60;
            break;
        default:
            throw new Error(`no support this chain for now: ${system_chain_id_src}`)
    }

    let dstTimeLock = 0
    switch (system_chain_id_dst) {
        case 9000:
            dstTimeLock = 2 * 60;
            break;
        case 9006:
            dstTimeLock = 1 * 60;
            break;
        case 614:
            dstTimeLock = 1 * 60;
            break;
        case 60:
            dstTimeLock =  4 * 60;
            break;
        case 966:
            dstTimeLock =  1 * 60;
            break;
        default:
            throw new Error(`no support this chain for now: ${system_chain_id_dst}`)
    }

    if (dstTimeLock > srcTimeLock) {
        return dstTimeLock
    } else {
        return srcTimeLock
    }

}

export const getOtmoicAddressBySystemChainId = (system_chain_id: number, network: string): string => {
    const isMainnet = network == 'mainnet'

    switch (system_chain_id) {
        case 9000:
            return isMainnet ? "" : "0x1016A0886b4AeD69043367d501a99cfBAaB052B5"
        case 9006:
            return isMainnet ? "0xcb24e8aEDB15981F4C088214722D8E3809e817eB" : "0xE09795702F95ff8Df93f41043f31C8A3b1789b8B"
        case 60:
            return isMainnet ? "" : "0xD6b2815Dc445e69aFbA7924f9744875FF2509Db2"
        case 966:
            return isMainnet ? "" : "0xd116c529E3188be0C1E6B53Ee499229e29B1E6fA"
        case 614:
            return isMainnet ? "0x7610e5C39f0Bc4EEF57DEdAAb19a714672B21c9b" : ""
        case 397:
            return isMainnet ? 'obridge.near' : 'otv1.saidev.testnet'
        case 144:
            return isMainnet ? '' : 'wss://s.altnet.rippletest.net:51233'
        default:
            throw new Error(`no support this chain for now: ${system_chain_id}`)
    }
}