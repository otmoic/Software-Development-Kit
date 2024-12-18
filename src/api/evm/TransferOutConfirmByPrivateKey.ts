import { ContractTransactionResponse, JsonRpcProvider, ethers } from 'ethers';
import { PreBusiness, NetworkType } from '../../interface/interface';
import { doTransferOutConfirm, getJsonRpcProvider } from '../../business/evm';

export const _transferOutConfirmByPrivateKey = (
    preBusiness: PreBusiness,
    privateKey: string,
    network: NetworkType,
    rpc: string | undefined,
    useMaximumGasPriceAtMost: boolean,
) =>
    new Promise<ContractTransactionResponse>(async (resolve, reject) => {
        try {
            const web3Wallet = new ethers.Wallet(privateKey);
            let provider: JsonRpcProvider = getJsonRpcProvider(preBusiness, rpc, network);

            const transferOutConfirmTx = await doTransferOutConfirm(
                preBusiness,
                provider,
                web3Wallet.connect(provider),
                network,
                useMaximumGasPriceAtMost,
            );

            resolve(transferOutConfirmTx);
        } catch (error) {
            reject(error);
        }
    });
