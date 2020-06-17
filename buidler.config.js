require('dotenv').config()
usePlugin("@nomiclabs/buidler-truffle5");

const privateKey = process.env.PRIVATE_KEY
const infuraKey = process.env.INFURA_KEY

module.exports = {
  networks: {
    develop: {
      url: "http://127.0.0.1:8545",
      accounts: "remote",
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
  }  
};
