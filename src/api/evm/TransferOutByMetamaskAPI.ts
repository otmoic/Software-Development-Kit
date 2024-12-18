import { ContractTransactionResponse, ethers } from 'ethers';
import { PreBusiness, NetworkType } from '../../interface/interface';
import { ResponseTransferOut } from '../../interface/api';
import { doApprove, doTransferOut, getJsonRpcProvider, _isNeedApprove } from '../../business/evm';

export const _transferOutByMetamaskAPI = (
    preBusiness: PreBusiness,
    metamaskAPI: any,
    network: NetworkType,
    rpc: string | undefined,
) =>
    new Promise<ResponseTransferOut>(async (resolve, reject) => {
        try {
            const provider = new ethers.JsonRpcProvider(metamaskAPI);
            let approveTx: ContractTransactionResponse | undefined = undefined;

            //approve
            if (await _isNeedApprove(preBusiness, preBusiness.swap_asset_information.sender, rpc, network)) {
                approveTx = await doApprove(preBusiness, provider, undefined, network, false);
                // console.log(approveTx)
            }

            if (provider == undefined || approveTx == undefined) {
                throw new Error('provider or approveTx not exist');
            }
            //transfer out
            const transferOutTx = await doTransferOut(preBusiness, provider, undefined, network, false);
            resolve({
                approve: approveTx,
                transferOut: transferOutTx,
            });
        } catch (error) {
            reject(error);
        }
    });
