import { defineChain } from "viem";

export const bsc = /*#__PURE__*/ defineChain({
    id: 56,
    name: 'BNB Smart Chain',
    network: 'bsc',
    nativeCurrency: {
      decimals: 18,
      name: 'BNB',
      symbol: 'BNB',
    },
    rpcUrls: {
      default: { http: ['https://56.rpc.thirdweb.com'] },
      public: { http: ['https://56.rpc.thirdweb.com'] },
    },
    blockExplorers: {
      etherscan: { name: 'BscScan', url: 'https://bscscan.com' },
      default: { name: 'BscScan', url: 'https://bscscan.com' },
    },
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 15921452,
      },
    },
  });