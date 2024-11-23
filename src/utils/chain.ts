import { toBs58Address } from './format';
import { ChainId, NetworkType } from '../interface/interface';

export const getNativeTokenName = (systemChainId: ChainId): string => {
    switch (systemChainId) {
        case ChainId.AVAX:
            return 'AVAX';
        case ChainId.BSC:
            return 'BNB';
        case ChainId.ETH:
            return 'ETH';
        case ChainId.POLYGON:
            return 'MATIC';
        case ChainId.OPT:
            return 'ETH';
        case ChainId.SOLANA:
            return 'SOL';
        case ChainId.NEAR:
            return 'NEAR';
        case ChainId.XRP:
            return 'XRP';
        default:
            throw new Error(`not support chainId: ${systemChainId}`);
    }
};

export const getNativeTokenDecimals = (systemChainId: ChainId): number => {
    switch (systemChainId) {
        case ChainId.AVAX:
        case ChainId.BSC:
        case ChainId.ETH:
        case ChainId.POLYGON:
        case ChainId.OPT:
            return 18;
        case ChainId.SOLANA:
            return 9;
        case ChainId.NEAR:
            return 24;
        case ChainId.XRP:
            return 6;
        default:
            throw new Error(`not support chainId: ${systemChainId}`);
    }
};

export const getChainName = (systemChainId: ChainId): string => {
    switch (systemChainId) {
        case ChainId.AVAX:
            return 'AVAX';
        case ChainId.BSC:
            return 'BSC';
        case ChainId.ETH:
            return 'ETH';
        case ChainId.OPT:
            return 'OPT';
        case ChainId.POLYGON:
            return 'Polygon';
        case ChainId.NEAR:
            return 'NEAR';
        case ChainId.XRP:
            return 'XRP';
        case ChainId.SOLANA:
            return 'Solana';
        default:
            throw new Error(`not support chainId: ${systemChainId}`);
    }
};

export const getChainId = (systemChainId: ChainId, network: NetworkType): number => {
    const isMainnet = network === NetworkType.MAINNET;
    switch (systemChainId) {
        case ChainId.BSC:
            return isMainnet ? 56 : 97;
        case ChainId.AVAX:
            return isMainnet ? 43114 : 43113;
        case ChainId.POLYGON:
            return isMainnet ? 137 : 80001;
        case ChainId.ETH:
            return isMainnet ? 1 : 11155111;
        case ChainId.OPT:
            return isMainnet ? 10 : 11155420;
        default:
            throw new Error(`not support chainId: ${systemChainId}`);
    }
};

export const getExpectedSingleStepTime = (systemChainIdSrc: ChainId, systemChainIdDst: ChainId): number => {
    let srcTimeLock = 0;
    switch (systemChainIdSrc) {
        case ChainId.AVAX:
            srcTimeLock = 2 * 60;
            break;
        case ChainId.BSC:
            srcTimeLock = 1 * 60;
            break;
        case ChainId.OPT:
            srcTimeLock = 1 * 60;
            break;
        case ChainId.ETH:
            srcTimeLock = 4 * 60;
            break;
        case ChainId.POLYGON:
            srcTimeLock = 1 * 60;
            break;
        case ChainId.SOLANA:
            srcTimeLock = 1 * 60;
            break;
        default:
            throw new Error(`no support this chain for now: ${systemChainIdSrc}`);
    }

    let dstTimeLock = 0;
    switch (systemChainIdDst) {
        case ChainId.AVAX:
            dstTimeLock = 2 * 60;
            break;
        case ChainId.BSC:
            dstTimeLock = 2 * 60;
            break;
        case ChainId.OPT:
            dstTimeLock = 1 * 60;
            break;
        case ChainId.ETH:
            dstTimeLock = 4 * 60;
            break;
        case ChainId.POLYGON:
            dstTimeLock = 1 * 60;
            break;
        case ChainId.SOLANA:
            srcTimeLock = 1 * 60;
            break;
        default:
            throw new Error(`no support this chain for now: ${systemChainIdDst}`);
    }

    if (dstTimeLock > srcTimeLock) {
        return dstTimeLock;
    } else {
        return srcTimeLock;
    }
};

export const getTolerantSingleStepTime = (systemChainIdSrc: ChainId, systemChainIdDst: ChainId): number => {
    let srcTimeLock = 0;
    switch (systemChainIdSrc) {
        case ChainId.AVAX:
            srcTimeLock = 4 * 60;
            break;
        case ChainId.BSC:
            srcTimeLock = 2 * 60;
            break;
        case ChainId.OPT:
            srcTimeLock = 2 * 60;
            break;
        case ChainId.ETH:
            srcTimeLock = 8 * 60;
            break;
        case ChainId.POLYGON:
            srcTimeLock = 2 * 60;
            break;
        case ChainId.SOLANA:
            srcTimeLock = 2 * 60;
            break;
        default:
            throw new Error(`no support this chain for now: ${systemChainIdSrc}`);
    }

    let dstTimeLock = 0;
    switch (systemChainIdDst) {
        case ChainId.AVAX:
            dstTimeLock = 4 * 60;
            break;
        case ChainId.BSC:
            dstTimeLock = 4 * 60;
            break;
        case ChainId.OPT:
            dstTimeLock = 2 * 60;
            break;
        case ChainId.ETH:
            dstTimeLock = 8 * 60;
            break;
        case ChainId.POLYGON:
            dstTimeLock = 2 * 60;
            break;
        case ChainId.SOLANA:
            srcTimeLock = 2 * 60;
            break;
        default:
            throw new Error(`no support this chain for now: ${systemChainIdDst}`);
    }

    if (dstTimeLock > srcTimeLock) {
        return dstTimeLock;
    } else {
        return srcTimeLock;
    }
};

export const getDefaultEarliestRefundTime = (
    agreementReachedTime: number,
    expectedSingleStepTime: number,
    tolerantSingleStepTime: number,
): number => {
    return agreementReachedTime + 3 * expectedSingleStepTime + 3 * tolerantSingleStepTime + 1;
};

export const getOtmoicAddressBySystemChainId = (systemChainId: ChainId, network: NetworkType): string => {
    const isMainnet = network == NetworkType.MAINNET;

    switch (systemChainId) {
        case ChainId.AVAX:
            return isMainnet ? '' : '';
        case ChainId.BSC:
            return isMainnet
                ? '0x6F12FED6Cd5BeBFA3351c447f7873B76178B1b84'
                : '0x6F12FED6Cd5BeBFA3351c447f7873B76178B1b84';
        case ChainId.ETH:
            return isMainnet ? '0x6F12FED6Cd5BeBFA3351c447f7873B76178B1b84' : '';
        case ChainId.POLYGON:
            return isMainnet ? '' : '';
        case ChainId.OPT:
            return isMainnet
                ? '0x6F12FED6Cd5BeBFA3351c447f7873B76178B1b84'
                : '0x6F12FED6Cd5BeBFA3351c447f7873B76178B1b84';
        case ChainId.NEAR:
            return isMainnet ? 'obridge.near' : 'otv1.saidev.testnet';
        case ChainId.XRP:
            return isMainnet ? '' : 'wss://s.altnet.rippletest.net:51233';
        case ChainId.SOLANA:
            return isMainnet
                ? 'FAqaHQHgBFFX8fJB6fQUqNdc8zABV5pGVRdCt7fLLYVo'
                : 'FAqaHQHgBFFX8fJB6fQUqNdc8zABV5pGVRdCt7fLLYVo';
        default:
            throw new Error(`no support this chain for now: ${systemChainId}`);
    }
};

export const getFeeRecepientAddressBySystemChainId = (systemChainId: ChainId, network: NetworkType): string => {
    const isMainnet = network == NetworkType.MAINNET;

    switch (systemChainId) {
        case ChainId.SOLANA:
            return isMainnet
                ? 'Gexuvyazbb48d5U6voRna5ef1SLPRUNLiwavqEx8otgy'
                : '8os21rmBjg63xMWuRK4vza3DxZ69AoQD6SffBBmnrpiQ';
        default:
            throw new Error(`no support this chain for now: ${systemChainId}`);
    }
};

export const getChainType = (systemChainId: ChainId): string => {
    switch (systemChainId) {
        case ChainId.AVAX:
        case ChainId.BSC:
        case ChainId.ETH:
        case ChainId.POLYGON:
        case ChainId.OPT:
            return 'evm';
        case ChainId.NEAR:
            return 'near';
        case ChainId.XRP:
            return 'xrp';
        case ChainId.SOLANA:
            return 'solana';

        default:
            throw new Error(`not support chain: ${systemChainId}`);
    }
};

export const getDefaultGasPrice = (systemChainId: ChainId, network: NetworkType): bigint => {
    const isMainnet = network == NetworkType.MAINNET;

    // 1 gwei
    switch (systemChainId) {
        case ChainId.AVAX:
            return isMainnet ? BigInt(1000000000) : BigInt(1000000000);
        case ChainId.BSC:
            return isMainnet ? BigInt(1000000000) : BigInt(1000000000);
        case ChainId.ETH:
            return isMainnet ? BigInt(1000000000) : BigInt(1000000000);
        case ChainId.POLYGON:
            return isMainnet ? BigInt(1000000000) : BigInt(1000000000);
        case ChainId.OPT:
            // op is much lower than others
            return isMainnet ? BigInt(1000000) : BigInt(1000000);
        case ChainId.SOLANA:
            // in micro lamports
            return isMainnet ? BigInt(1) : BigInt(1);
        default:
            throw new Error(`not support chain: ${systemChainId}`);
    }
};

export const getMaximumGasPrice = (systemChainId: ChainId, network: NetworkType): bigint => {
    const isMainnet = network == NetworkType.MAINNET;

    // 500 Gwei
    switch (systemChainId) {
        case ChainId.AVAX:
            return isMainnet ? BigInt(5000000000) : BigInt(5000000000);
        case ChainId.BSC:
            return isMainnet ? BigInt(5000000000) : BigInt(5000000000);
        case ChainId.ETH:
            return isMainnet ? BigInt(5000000000) : BigInt(5000000000);
        case ChainId.POLYGON:
            return isMainnet ? BigInt(5000000000) : BigInt(5000000000);
        case ChainId.OPT:
            // op is much lower than others
            return isMainnet ? BigInt(50000000) : BigInt(50000000);
        case ChainId.SOLANA:
            // in micro lamports
            return isMainnet ? BigInt(5000000) : BigInt(5000000);
        default:
            throw new Error(`not support chain: ${systemChainId}`);
    }
};

export const getTokenAddress = (contractAddress: string, systemChainId: ChainId) => {
    if (systemChainId == ChainId.SOLANA) {
        if (contractAddress.startsWith('0x')) {
            return toBs58Address(contractAddress);
        } else {
            return toBs58Address(BigInt(contractAddress).toString(16));
        }
    } else {
        if (contractAddress.startsWith('0x')) {
            return contractAddress;
        } else {
            return BigInt(contractAddress).toString(16);
        }
    }
};
