import { Bridge } from './interface/interface';
export { Bridge };
import { OnQuoteIF } from './interface/interface';
export { OnQuoteIF };
import { AskIF } from './interface/interface';
export { AskIF };
import { Quote } from './interface/interface';
export { Quote };
import { LpInfo } from './interface/interface';
export { LpInfo };
import { AuthenticationLimiter } from './interface/interface';
export { AuthenticationLimiter };
import { QuoteBase } from './interface/interface';
export { QuoteBase };
import { SignData } from './interface/interface';
export { SignData };
import { PreBusiness } from './interface/interface';
export { PreBusiness };
import { BusinessFullData } from './interface/interface';
export { BusinessFullData };
import { Business } from './interface/interface';
export { Business };
import { TranslatedBridge } from './interface/api';
export { TranslatedBridge };
import { ResponseTransferOut } from './interface/api';
export { ResponseTransferOut };
import { ResponseSolana } from './interface/api';
export { ResponseSolana };

import { getChainName, getChainType, getNativeTokenName, getTokenAddress } from './utils/chain';
import { getChainId, getNativeTokenDecimals } from './utils/chain';
import { sleep } from './utils/sleep';
import { translateBridge } from './api/TranslateBridge';
import {
    _getComplainSignData,
    _getSignDataEIP712,
    decimals as _evmDecimals,
    decimalsDefaultRpc as _evmDecimalsDefaultRpc,
    _isNeedApprove,
    _getApproveTransfer,
    _getTransferOutTransfer,
    _getTransferOutConfirmTransfer,
    _getTransferOutRefundTransfer,
    _getTransferInConfirmTransfer,
    _getGasPrice,
    _getOnChainGasPrice,
} from './business/evm';
import { _signQuoteEIP712ByPrivateKey } from './api/evm/SignQuoteEIP712ByPrivateKey';
import { _signQuoteEIP712ByMetamaskAPI } from './api/evm/SignQuoteEIP712ByMetamaskAPI';
import { _signComplainEIP712ByPrivateKey } from './api/evm/SignComplainEIP712ByPrivateKey';
import { _signComplainEIP712ByTermiPass } from './api/evm/SignComplainEIP712ByTermiPass';
import { _swap } from './api/Swap';
import { _transferOutByPrivateKey } from './api/evm/TransferOutByPrivateKey';
import { _transferOutByMetamaskAPI } from './api/evm/TransferOutByMetamaskAPI';
import { _transferOutConfirmByPrivateKey } from './api/evm/TransferOutConfirmByPrivateKey';
import { _transferOutConfirmByMetamaskAPI } from './api/evm/TransferOutConfirmByMetamaskAPI';
import { _transferOutRefundByPrivateKey } from './api/evm/TransferOutRefundByPrivateKey';
import { _transferOutRefundByMetamaskAPI } from './api/evm/TransferOutRefundByMetamaskAPI';
import { _transferInConfirmByPrivateKey } from './api/evm/TransferInConfirmByPrivateKey';
import { _transferInConfirmByMetamaskAPI } from './api/evm/TransferInConfirmByMetamaskAPI';
import { _getHistory } from './api/GetHistory';
import { _getBusiness, _getBusinessFull } from './api/GetBusiness';
import { _getBridge } from './api/GetBridge';
import { QuoteManager } from './api/Quote';
import { mathReceived } from './utils/math';
import { getBalance } from './api/GetBalance';
import { getBalance as getBalanceEVM } from './business/evm';
import { getBalance as getBalanceSOLANA } from './business/solana';

import {
    _getSignDataEIP712 as _getSignDataSolana,
    _getSignPreambleEIP712,
    _getTransferOutConfirmTransaction,
    _getTransferOutTransaction,
    _getTransferOutRefundTransaction,
    decimals as _solanaDecimals,
    decimalsDefaultRpc as _solanaDecimalsDefaultRpc,
} from './business/solana';
import { _signQuoteByPrivateKey } from './api/solana/SignQuoteByPrivateKey';
import { _signQuoteByWalletPlugin } from './api/solana/SignQuoteByWalletPlugin';
import { _transferOutByPrivateKey as _transferOutSolanaByPrivateKey } from './api/solana/TransferOutByPrivateKey';
import { _transferOutByWalletPlugin } from './api/solana/TransferOutByWalletPlugin';
import { _transferOutConfirmByPrivateKey as _transferOutConfirmSolanaByPrivateKey } from './api/solana/TransferOutConfirmByPrivateKey';
import { _transferOutConfirmByWalletPlugin } from './api/solana/TransferOutConfirmByWalletPlugin';
import { _transferOutRefundByPrivateKey as _transferOutRefundSolanaByPrivateKey } from './api/solana/TransferOutRefundByPrivateKey';
import { _transferOutRefundByWalletPlugin } from './api/solana/TransferOutRefundByWalletPlugin';
import { _transferInConfirmByPrivateKey as _transferInConfirmSolanaByPrivateKey } from './api/solana/TransferInConfirmByPrivateKey';
import { _transferInConfirmByWalletPlugin } from './api/solana/TransferInConfirmByWalletPlugin';
import { submitComplain } from './api/SubmitComplain';
import { getDidName } from './utils/did';
import { Connection } from '@solana/web3.js';
import { Provider } from '@coral-xyz/anchor';

export namespace utils {
    export const GetChainName = getChainName;
    export const GetNativeTokenName = getNativeTokenName;
    export const GetChainId = getChainId;
    export const GetNativeTokenDecimals = getNativeTokenDecimals;
    export const Sleep = sleep;
    export const MathReceived = mathReceived;
    export const GetChainType = getChainType;
    export const GetTokenAddress = getTokenAddress;
    export const EvmDecimals = _evmDecimals;
    export const EvmDecimalsDefaultRpc = _evmDecimalsDefaultRpc;
    export const SolanaDecimals = _solanaDecimals;
    export const SolanaDecimalsDefaultRpc = _solanaDecimalsDefaultRpc;
    export const Decimals = (system_chain_id: number, token_address: string, rpc: string) => {
        if (system_chain_id == 501) {
            return SolanaDecimals(system_chain_id, token_address, rpc);
        } else {
            return EvmDecimals(system_chain_id, token_address, rpc);
        }
    };
    export const DecimalsDefaultRpc = (system_chain_id: number, token_address: string, network: string) => {
        if (system_chain_id == 501) {
            return SolanaDecimalsDefaultRpc(system_chain_id, token_address, network);
        } else {
            return EvmDecimalsDefaultRpc(system_chain_id, token_address, network);
        }
    };
}

export namespace evm {
    export const getComplainSignData = _getComplainSignData;

    export const signComplainEIP712ByTermiPass = _signComplainEIP712ByTermiPass;

    export const signComplainEIP712ByPrivateKey = _signComplainEIP712ByPrivateKey;

    export const getSignDataEIP712 = _getSignDataEIP712;

    export const isNeedApprove = _isNeedApprove;

    export const getApproveTransfer = _getApproveTransfer;

    export const getTransferOutTransfer = _getTransferOutTransfer;

    export const getTransferOutConfirmTransfer = _getTransferOutConfirmTransfer;

    export const getTransferOutRefundTransfer = _getTransferOutRefundTransfer;

    export const getTransferInConfirmTransfer = _getTransferInConfirmTransfer;

    export const getGasPrice = _getGasPrice;

    export const getOnChainGasPrice = _getOnChainGasPrice;

    export const signQuoteEIP712ByPrivateKey = (
        network: string,
        quote: Quote,
        privateKey: string,
        amount: string,
        swapToNative: number,
        receivingAddress: string,
        expectedSingleStepTime: number | undefined,
        tolerantSingleStepTime: number | undefined,
        earliestRefundTime: number | undefined,
        rpcSrc: string | undefined,
        rpcDst: string | undefined,
    ) =>
        _signQuoteEIP712ByPrivateKey(
            quote,
            privateKey,
            network,
            amount,
            swapToNative,
            receivingAddress,
            expectedSingleStepTime,
            tolerantSingleStepTime,
            earliestRefundTime,
            rpcSrc,
            rpcDst,
        );

    export const signQuoteEIP712ByMetamaskAPI = (
        network: string,
        quote: Quote,
        metamaskAPI: any,
        sender: string,
        amount: string,
        swapToNative: number,
        receivingAddress: string,
        expectedSingleStepTime: number | undefined,
        tolerantSingleStepTime: number | undefined,
        earliestRefundTime: number | undefined,
        rpcSrc: string | undefined,
        rpcDst: string | undefined,
    ) =>
        _signQuoteEIP712ByMetamaskAPI(
            quote,
            metamaskAPI,
            sender,
            network,
            amount,
            swapToNative,
            receivingAddress,
            expectedSingleStepTime,
            tolerantSingleStepTime,
            earliestRefundTime,
            rpcSrc,
            rpcDst,
        );

    export const transferOutByPrivateKey = (
        preBusiness: PreBusiness,
        privateKey: string,
        network: string,
        rpc: string | undefined,
        useMaximumGasPriceAtMost: boolean,
    ) => _transferOutByPrivateKey(preBusiness, privateKey, network, rpc, useMaximumGasPriceAtMost);

    export const transferOutByMetamaskAPI = (
        preBusiness: PreBusiness,
        metamaskAPI: any,
        network: string,
        rpc: string | undefined,
    ) => _transferOutByMetamaskAPI(preBusiness, metamaskAPI, network, rpc);

    export const transferOutConfirmByPrivateKey = (
        preBusiness: PreBusiness,
        privateKey: string,
        network: string,
        rpc: string | undefined,
        useMaximumGasPriceAtMost: boolean,
    ) => _transferOutConfirmByPrivateKey(preBusiness, privateKey, network, rpc, useMaximumGasPriceAtMost);

    export const transferOutConfirmByMetamaskAPI = (
        preBusiness: PreBusiness,
        metamaskAPI: any,
        network: string,
        rpc: string | undefined,
    ) => _transferOutConfirmByMetamaskAPI(preBusiness, metamaskAPI, network, rpc);

    export const transferOutRefundByPrivateKey = (
        preBusiness: PreBusiness,
        privateKey: string,
        network: string,
        rpc: string | undefined,
        useMaximumGasPriceAtMost: boolean,
    ) => _transferOutRefundByPrivateKey(preBusiness, privateKey, network, rpc, useMaximumGasPriceAtMost);

    export const transferOutRefundByMetamaskAPI = (
        preBusiness: PreBusiness,
        metamaskAPI: any,
        network: string,
        rpc: string | undefined,
    ) => _transferOutRefundByMetamaskAPI(preBusiness, metamaskAPI, network, rpc);

    export const transferInConfirmByPrivateKey = (
        preBusiness: PreBusiness,
        privateKey: string,
        network: string,
        rpc: string | undefined,
        sender: string,
        useMaximumGasPriceAtMost: boolean,
    ) => _transferInConfirmByPrivateKey(preBusiness, privateKey, network, rpc, sender, useMaximumGasPriceAtMost);

    export const transferInConfirmByMetamaskAPI = (
        preBusiness: PreBusiness,
        metamaskAPI: any,
        network: string,
        rpc: string | undefined,
        sender: string,
    ) => _transferInConfirmByMetamaskAPI(preBusiness, metamaskAPI, network, rpc, sender);
}

export namespace solana {
    export const getSignData = _getSignDataSolana;
    export const getSignPreamble = _getSignPreambleEIP712;
    export const signQuoteByPrivateKey = (
        network: string,
        quote: Quote,
        privateKey: string,
        amount: string,
        swapToNative: number,
        receivingAddress: string,
        expectedSingleStepTime: number | undefined,
        tolerantSingleStepTime: number | undefined,
        earliestRefundTime: number | undefined,
        rpcSrc: string | undefined,
        rpcDst: string | undefined,
    ) =>
        _signQuoteByPrivateKey(
            quote,
            privateKey,
            network,
            amount,
            swapToNative,
            receivingAddress,
            expectedSingleStepTime,
            tolerantSingleStepTime,
            earliestRefundTime,
            rpcSrc,
            rpcDst,
        );

    export const signQuoteByWalletPlugin = (
        network: string,
        quote: Quote,
        phantomAPI: any,
        sender: string,
        amount: string,
        swapToNative: number,
        receivingAddress: string,
        expectedSingleStepTime: number | undefined,
        tolerantSingleStepTime: number | undefined,
        earliestRefundTime: number | undefined,
        rpcSrc: string | undefined,
        rpcDst: string | undefined,
    ) =>
        _signQuoteByWalletPlugin(
            quote,
            phantomAPI,
            sender,
            network,
            amount,
            swapToNative,
            receivingAddress,
            expectedSingleStepTime,
            tolerantSingleStepTime,
            earliestRefundTime,
            rpcSrc,
            rpcDst,
        );

    export const transferOutByPrivateKey = (
        preBusiness: PreBusiness,
        privateKey: string,
        network: string,
        rpc: string | undefined,
    ) => _transferOutSolanaByPrivateKey(preBusiness, privateKey, network, rpc);

    export const transferOutByWalletPlugin = (
        preBusiness: PreBusiness,
        phantomAPI: any,
        network: string,
        rpc: string | undefined,
    ) => _transferOutByWalletPlugin(preBusiness, phantomAPI, network, rpc);

    export const transferOutConfirmByPrivateKey = (
        preBusiness: PreBusiness,
        privateKey: string,
        network: string,
        rpc: string | undefined,
    ) => _transferOutConfirmSolanaByPrivateKey(preBusiness, privateKey, network, rpc);

    export const getTransferOutTransaction = (
        preBusiness: PreBusiness,
        provider: Connection | undefined,
        network: string,
        pluginProvider?: Provider,
    ) => _getTransferOutTransaction(preBusiness, provider, network, pluginProvider);

    export const getTransferOutRefundTransaction = (
        preBusiness: PreBusiness,
        provider: Connection | undefined,
        network: string,
        pluginProvider?: Provider,
    ) => _getTransferOutRefundTransaction(preBusiness, provider, network, pluginProvider);

    export const transferOutConfirmByWalletPlugin = (
        preBusiness: PreBusiness,
        phantomAPI: any,
        network: string,
        rpc: string | undefined,
    ) => _transferOutConfirmByWalletPlugin(preBusiness, phantomAPI, network, rpc);

    export const getTransferOutConfirmTransaction = (
        preBusiness: PreBusiness,
        provider: Connection | undefined,
        network: string,
        pluginProvider?: Provider,
    ) => _getTransferOutConfirmTransaction(preBusiness, provider, network, pluginProvider);

    export const transferOutRefundByPrivateKey = (
        preBusiness: PreBusiness,
        privateKey: string,
        network: string,
        rpc: string | undefined,
    ) => _transferOutRefundSolanaByPrivateKey(preBusiness, privateKey, network, rpc);

    export const transferOutRefundByWalletPlugin = (
        preBusiness: PreBusiness,
        phantomAPI: any,
        network: string,
        rpc: string | undefined,
    ) => _transferOutRefundByWalletPlugin(preBusiness, phantomAPI, network, rpc);

    export const transferInConfirmByPrivateKey = (
        preBusiness: PreBusiness,
        privateKey: string,
        network: string,
        rpc: string | undefined,
        sender: string,
    ) => _transferInConfirmSolanaByPrivateKey(preBusiness, privateKey, network, rpc, sender);

    export const transferInConfirmByWalletPlugin = (
        preBusiness: PreBusiness,
        phantomAPI: any,
        network: string,
        rpc: string | undefined,
        sender: string,
    ) => _transferInConfirmByWalletPlugin(preBusiness, phantomAPI, network, rpc, sender);
}

export namespace business {
    export const signQuoteByPrivateKey = (
        network: string,
        quote: Quote,
        privateKey: string,
        amount: string,
        swapToNative: number,
        receivingAddress: string,
        expectedSingleStepTime: number | undefined,
        tolerantSingleStepTime: number | undefined,
        earliestRefundTime: number | undefined,
        rpcSrc: string | undefined,
        rpcDst: string | undefined,
    ) => {
        switch (getChainType(quote.quote_base.bridge.src_chain_id)) {
            case 'evm':
                return evm.signQuoteEIP712ByPrivateKey(
                    network,
                    quote,
                    privateKey,
                    amount,
                    swapToNative,
                    receivingAddress,
                    expectedSingleStepTime,
                    tolerantSingleStepTime,
                    earliestRefundTime,
                    rpcSrc,
                    rpcDst,
                );

            case 'solana':
                return solana.signQuoteByPrivateKey(
                    network,
                    quote,
                    privateKey,
                    amount,
                    swapToNative,
                    receivingAddress,
                    expectedSingleStepTime,
                    tolerantSingleStepTime,
                    earliestRefundTime,
                    rpcSrc,
                    rpcDst,
                );

            default:
                throw new Error(`not support chain: ${quote.quote_base.bridge.src_chain_id}`);
        }
    };

    export const transferOutByPrivateKey = (
        preBusiness: PreBusiness,
        privateKey: string,
        network: string,
        rpc: string | undefined,
        useMaximumGasPriceAtMost: boolean,
    ) => {
        switch (getChainType(preBusiness.swap_asset_information.quote.quote_base.bridge.src_chain_id)) {
            case 'evm':
                return evm.transferOutByPrivateKey(preBusiness, privateKey, network, rpc, useMaximumGasPriceAtMost);

            case 'solana':
                return solana.transferOutByPrivateKey(preBusiness, privateKey, network, rpc);

            default:
                throw new Error(
                    `not support chain: ${preBusiness.swap_asset_information.quote.quote_base.bridge.src_chain_id}`,
                );
        }
    };

    export const transferOutConfirmByPrivateKey = (
        preBusiness: PreBusiness,
        privateKey: string,
        network: string,
        rpc: string | undefined,
        useMaximumGasPriceAtMost: boolean,
    ) => {
        switch (getChainType(preBusiness.swap_asset_information.quote.quote_base.bridge.src_chain_id)) {
            case 'evm':
                return evm.transferOutConfirmByPrivateKey(
                    preBusiness,
                    privateKey,
                    network,
                    rpc,
                    useMaximumGasPriceAtMost,
                );

            case 'solana':
                return solana.transferOutConfirmByPrivateKey(preBusiness, privateKey, network, rpc);

            default:
                throw new Error(
                    `not support chain: ${preBusiness.swap_asset_information.quote.quote_base.bridge.src_chain_id}`,
                );
        }
    };

    export const transferInConfirmByPrivateKey = (
        preBusiness: PreBusiness,
        privateKey: string,
        network: string,
        rpc: string | undefined,
        sender: string,
        useMaximumGasPriceAtMost: boolean,
    ) => {
        switch (getChainType(preBusiness.swap_asset_information.quote.quote_base.bridge.dst_chain_id)) {
            case 'evm':
                return evm.transferInConfirmByPrivateKey(
                    preBusiness,
                    privateKey,
                    network,
                    rpc,
                    sender,
                    useMaximumGasPriceAtMost,
                );

            case 'solana':
                return solana.transferInConfirmByPrivateKey(preBusiness, privateKey, network, rpc, sender);

            default:
                throw new Error(
                    `not support chain: ${preBusiness.swap_asset_information.quote.quote_base.bridge.src_chain_id}`,
                );
        }
    };

    export const transferOutRefundByPrivateKey = (
        preBusiness: PreBusiness,
        privateKey: string,
        network: string,
        rpc: string | undefined,
        useMaximumGasPriceAtMost: boolean,
    ) => {
        switch (getChainType(preBusiness.swap_asset_information.quote.quote_base.bridge.src_chain_id)) {
            case 'evm':
                return evm.transferOutRefundByPrivateKey(
                    preBusiness,
                    privateKey,
                    network,
                    rpc,
                    useMaximumGasPriceAtMost,
                );

            case 'solana':
                return solana.transferOutRefundByPrivateKey(preBusiness, privateKey, network, rpc);

            default:
                throw new Error(
                    `not support chain: ${preBusiness.swap_asset_information.quote.quote_base.bridge.src_chain_id}`,
                );
        }
    };

    export const complainByPrivateKey = async (preBusiness: PreBusiness, privateKey: string, network: string) => {
        const name = await getDidName(privateKey, network);
        if (name != undefined) {
            const signed = await evm.signComplainEIP712ByPrivateKey(preBusiness, privateKey, network);
            return await submitComplain(network, signed.signData.message, signed.signed, name);
        } else {
            return 'wallet not terminus did owner';
        }
    };

    export const SubmitComplain = submitComplain
}

export namespace assistive {
    export const TranslateBridge = translateBridge;
    export const GetBalance = getBalance;
    export const GetBalanceEVM = getBalanceEVM;
    export const GetBalanceSOLANA = getBalanceSOLANA;
}

export class Relay {
    relayUrl: string;

    network: string = 'mainnet';

    quoteManager: QuoteManager = new QuoteManager();

    constructor(relay: string) {
        if (relay == undefined) {
            throw new Error('The relay parameter is required. ');
        }

        this.relayUrl = relay;
    }

    getBridge = (): Promise<Bridge[]> => _getBridge(this.relayUrl);

    ask = (askIF: AskIF, callback: OnQuoteIF): void => this.quoteManager.ask(askIF, callback, this.relayUrl);

    stopAsk = (): void => this.quoteManager.stopAsk();

    swap = (quote: Quote, signData: SignData, signed: string): Promise<PreBusiness> =>
        _swap(quote, signData, signed, this.relayUrl);

    getHistory = (address: string): Promise<BusinessFullData[]> => _getHistory(this.relayUrl, address);

    getBusiness = (hash: string): Promise<Business> => _getBusiness(this.relayUrl, hash);

    getBusinessFull = (hash: string): Promise<BusinessFullData> => _getBusinessFull(this.relayUrl, hash);
}

export namespace Otmoic {
    export type BridgeIF = Bridge;

    export type RelayImp = Relay;
}

export default Otmoic;
