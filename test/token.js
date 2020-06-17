const Token = artifacts.require('HighVibeToken')

contract('HighVibeToken', accounts => {
    it("should work properly", async function() {
        const token = await Token.new()

        assert.equal((await token.deploymentTime()).toNumber() > new Date() / 1000, true)  

        const result = await token.mintInflationTokens()

        console.log(result)
    })
})