import { ContractTransactionResponse, ethers } from 'ethers';
import { PreBusiness } from '../../interface/interface';
import { doTransferOutRefund } from '../../business/evm';

export const _transferOutRefundByMetamaskAPI = (
    preBusiness: PreBusiness,
    metamaskAPI: any,
    network: string,
    rpc: string | undefined,
) =>
    new Promise<ContractTransactionResponse>(async (resolve, reject) => {
        try {
            const provider = new ethers.JsonRpcProvider(metamaskAPI);

            const transferOutRefundTx = await doTransferOutRefund(preBusiness, provider, undefined, network, false);

            resolve(transferOutRefundTx);
        } catch (error) {
            reject(error);
        }
    });
