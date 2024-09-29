export default {
    erc20: [
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'initialSupply',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'Approval',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'Transfer',
            type: 'event',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
            ],
            name: 'allowance',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
            ],
            name: 'approve',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'balanceOf',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'decimals',
            outputs: [
                {
                    internalType: 'uint8',
                    name: '',
                    type: 'uint8',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'subtractedValue',
                    type: 'uint256',
                },
            ],
            name: 'decreaseAllowance',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'addedValue',
                    type: 'uint256',
                },
            ],
            name: 'increaseAllowance',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'name',
            outputs: [
                {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'symbol',
            outputs: [
                {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'totalSupply',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
            ],
            name: 'transfer',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
            ],
            name: 'transferFrom',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ],
    otmoic: [
        {
            inputs: [
                {
                    internalType: 'string',
                    name: 'op',
                    type: 'string',
                },
                {
                    internalType: 'uint64',
                    name: 'expiredAt',
                    type: 'uint64',
                },
            ],
            name: 'ExpiredOp',
            type: 'error',
        },
        {
            inputs: [],
            name: 'FailedToSendEther',
            type: 'error',
        },
        {
            inputs: [],
            name: 'InvalidAmount',
            type: 'error',
        },
        {
            inputs: [],
            name: 'InvalidHashlock',
            type: 'error',
        },
        {
            inputs: [],
            name: 'InvalidSender',
            type: 'error',
        },
        {
            inputs: [],
            name: 'InvalidStatus',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'string',
                    name: 'op',
                    type: 'string',
                },
                {
                    internalType: 'uint64',
                    name: 'lockedUntil',
                    type: 'uint64',
                },
            ],
            name: 'NotUnlock',
            type: 'error',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'transferId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'sender',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'token_amount',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'eth_amount',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'hashlock',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'uint64',
                    name: 'stepTimelock',
                    type: 'uint64',
                },
                {
                    indexed: false,
                    internalType: 'uint64',
                    name: 'srcChainId',
                    type: 'uint64',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'srcTransferId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'uint64',
                    name: 'agreementReachedTime',
                    type: 'uint64',
                },
            ],
            name: 'LogNewTransferIn',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'transferId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'sender',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'hashlock',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'relayHashlock',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'uint64',
                    name: 'stepTimelock',
                    type: 'uint64',
                },
                {
                    indexed: false,
                    internalType: 'uint64',
                    name: 'dstChainId',
                    type: 'uint64',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'dstAddress',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'bidId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'tokenDst',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'amountDst',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'nativeAmountDst',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint64',
                    name: 'agreementReachedTime',
                    type: 'uint64',
                },
                {
                    indexed: false,
                    internalType: 'string',
                    name: 'requestor',
                    type: 'string',
                },
                {
                    indexed: false,
                    internalType: 'string',
                    name: 'lpId',
                    type: 'string',
                },
                {
                    indexed: false,
                    internalType: 'string',
                    name: 'userSign',
                    type: 'string',
                },
                {
                    indexed: false,
                    internalType: 'string',
                    name: 'lpSign',
                    type: 'string',
                },
            ],
            name: 'LogNewTransferOut',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'transferId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'preimage',
                    type: 'bytes32',
                },
            ],
            name: 'LogTransferInConfirmed',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'transferId',
                    type: 'bytes32',
                },
            ],
            name: 'LogTransferInRefunded',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'transferId',
                    type: 'bytes32',
                },
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'preimage',
                    type: 'bytes32',
                },
            ],
            name: 'LogTransferOutConfirmed',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'bytes32',
                    name: 'transferId',
                    type: 'bytes32',
                },
            ],
            name: 'LogTransferOutRefunded',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'previousOwner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'newOwner',
                    type: 'address',
                },
            ],
            name: 'OwnershipTransferred',
            type: 'event',
        },
        {
            inputs: [],
            name: 'approveOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'basisPointsRate',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_sender',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_receiver',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_token',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_token_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_eth_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes32',
                    name: '_hashlock',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint64',
                    name: '_stepTimelock',
                    type: 'uint64',
                },
                {
                    internalType: 'bytes32',
                    name: '_preimage',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint64',
                    name: '_agreementReachedTime',
                    type: 'uint64',
                },
            ],
            name: 'confirmTransferIn',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_sender',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_receiver',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_token',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_token_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_eth_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes32',
                    name: '_hashlock',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes32',
                    name: '_relayHashlock',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint64',
                    name: '_stepTimelock',
                    type: 'uint64',
                },
                {
                    internalType: 'bytes32',
                    name: '_preimage',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes32',
                    name: '_relayPreimage',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint64',
                    name: '_agreementReachedTime',
                    type: 'uint64',
                },
            ],
            name: 'confirmTransferOut',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            name: 'maximumFee',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'nextOwner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_sender',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_receiver',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_token',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_token_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_eth_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes32',
                    name: '_hashlock',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint64',
                    name: '_stepTimelock',
                    type: 'uint64',
                },
                {
                    internalType: 'uint64',
                    name: '_agreementReachedTime',
                    type: 'uint64',
                },
            ],
            name: 'refundTransferIn',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_sender',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_receiver',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_token',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_token_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_eth_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes32',
                    name: '_hashlock',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes32',
                    name: '_relayHashlock',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint64',
                    name: '_stepTimelock',
                    type: 'uint64',
                },
                {
                    internalType: 'uint64',
                    name: '_agreementReachedTime',
                    type: 'uint64',
                },
            ],
            name: 'refundTransferOut',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'renounceOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'rate',
                    type: 'uint256',
                },
            ],
            name: 'setBasisPointsRate',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'fee',
                    type: 'uint256',
                },
            ],
            name: 'setMaximumFee',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'toll',
                    type: 'address',
                },
            ],
            name: 'setTollAddress',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'tollAddress',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_sender',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_dstAddress',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_token',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_token_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_eth_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes32',
                    name: '_hashlock',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint64',
                    name: '_stepTimelock',
                    type: 'uint64',
                },
                {
                    internalType: 'uint64',
                    name: '_srcChainId',
                    type: 'uint64',
                },
                {
                    internalType: 'bytes32',
                    name: '_srcTransferId',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint64',
                    name: '_agreementReachedTime',
                    type: 'uint64',
                },
            ],
            name: 'transferIn',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_sender',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_receiver',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '_token',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '_amount',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes32',
                    name: '_hashlock',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes32',
                    name: '_relayHashlock',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint64',
                    name: '_stepTimelock',
                    type: 'uint64',
                },
                {
                    internalType: 'uint64',
                    name: '_dstChainId',
                    type: 'uint64',
                },
                {
                    internalType: 'uint256',
                    name: '_dstAddress',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes32',
                    name: '_bidId',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: '_tokenDst',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_amountDst',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '_nativeAmountDst',
                    type: 'uint256',
                },
                {
                    internalType: 'uint64',
                    name: '_agreementReachedTime',
                    type: 'uint64',
                },
                {
                    internalType: 'string',
                    name: '_requestor',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: '_lpId',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: '_userSign',
                    type: 'string',
                },
                {
                    internalType: 'string',
                    name: '_lpSign',
                    type: 'string',
                },
            ],
            name: 'transferOut',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_newOwner',
                    type: 'address',
                },
            ],
            name: 'transferOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'transfers',
            outputs: [
                {
                    internalType: 'enum OBridge.TransferStatus',
                    name: '',
                    type: 'uint8',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            stateMutability: 'payable',
            type: 'receive',
        },
    ],
};
