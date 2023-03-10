require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
require("@nomiclabs/hardhat-ethers");

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    goerli: {
      url: process.env.API_URL,
      accounts: [`0x${process.env.DEPLOYER_KEY}`]
    }
  },
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./src/contracts",
    artifacts: "./src/abis"
  },
  mocha: {
    timeout: 40000
  }
}