require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remind essay hope entire swift giant'; 
let testAccounts = [
"0xc3d6e70b3ed357434cb3e1f466a12fc69461599dcad96b6ad650015eda578216",
"0xd9359c4459911d746099696afb10c1f9737b13b80affe2d4d7a05d481d578bec",
"0xd1edeb3c18b90a57fae89c23d87384db60485cf78e5ae9bf3693424e05053aba",
"0xa129cf848a4263cc295c0bad67aba1af39e1a8341ba0c3938b924ddd3b079fd9",
"0x0f5f8c82149696bd6992d0217058d45cfba7fb32a7512c1fa0289ccf79e3394e",
"0xd36728b3b5fb5cabb50390b12c06059d5fa06f2663eb599390e6506a7b3508e4",
"0x79a804eea1c4b5ea642976d26177c0391d5acca207e804026b5a930b8d68438e",
"0x319cfec2f2aa4bbfbd18257d7193cf483b54c75cad7206e43fc7f33f4ce7ba94",
"0xe544bffbd737b7521f54092d713b026f111f6da0bce57d2270bab70153794a58",
"0x1b1a3f92e2064b9e0633138a2bd94e803b2e89616cdd9d442ac6b1a294ab72d0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

