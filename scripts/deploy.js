const env = require('@nomiclabs/buidler')

async function main() {
    const Token = env.artifacts.require('HighVibeToken')

    const token = await Token.new({ from: '0xEe4Edd587668e2775825ff18109463Ca8681e8B5' })

    console.log(token.address)
}

main()