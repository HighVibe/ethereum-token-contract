require('dotenv').config()
const env = require('@nomiclabs/buidler')

const tokenAddress = process.env.TOKEN_ADDRESS
const ownerAddress = process.env.OWNER_ADDRESS

async function main() {
    await env.run('compile')

    const Token = env.artifacts.require('HighVibeToken')

    const token = await Token.at(tokenAddress)

    const result = await token.mintInflationTokens({ from: ownerAddress });

    console.log(result)
}

main()