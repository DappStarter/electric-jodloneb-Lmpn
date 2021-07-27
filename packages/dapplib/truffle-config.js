require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remember evil good gloom swear slight'; 
let testAccounts = [
"0x0659f433bf1c4951ce237e1c9296c667731fef52413b347e39cf0b15207a3a16",
"0x013835b96b8e4936b7f9e7545902192072921258c7c4374510b2eed67a1bb195",
"0xb452d87ee43c6cd0ee1143cd282ce1f54e4e4bcabd29aa68b1c553046aa02386",
"0x03c18cb4beff59b1feae1ba7bca8d5296f366dc5c70eefbc54ce4d426bb5d808",
"0x6617d7f1ef5ba1bfec684c593a989bf4541e493d5d2e7d557a5bd49687ace752",
"0xbf4390bb13e659a8f927a4290cd85f51fda4b9cdffc0d767212f543a3f2892ac",
"0xa807aa331608bf3d6c5b5ac96f41786447dcb786d4e7ba9e2c5ed68d169145be",
"0x4284e9ae459963363f4a71a8110ce0bef4f7e573c811db8586431ab64cd27cc0",
"0xed89f98733e4767d5b272268a20f5f6a9ed1ee539d4b662e474bbb218e46a353",
"0x8d86053906375051f0d7c6e53004167b8db35966872858be561fef248247f8f0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

