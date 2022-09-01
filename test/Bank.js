const {expect} = require("chai");
const {ethers} = require("hardhat");


describe("Pbank", function(){
  // Declare necessary variables to help testing
    // Variables for the contract

    let PbankFactory, PbankContract

    // Variables for the signer
    let owner, account1, account2

    beforeEach(async function () {
      // Initialize the signers from hardhat provided signers
      [owner, account1, account2] = await ethers.getSigners()
      
      // Initialize our contract
      PbankFactory = await ethers.getContractFactory("Pbank")
      PbankContract = await PbankFactory.deploy()
  });

  describe("deposit function", () => {
    it("should revert if no ether was sent", async () => {
      await expect(PbankContract.deposit(0)).to.be.revertedWith('invalid deposit')
    })

    it("should revert if ether is less than 1 ether", async () => {
      // const valueOfEther = ethers.utils.parseEther("2")
      await expect(PbankContract.connect(account1).deposit(1000)).to.be.revertedWith('invalid deposit')
      // await expect (PbankContract.deposit({value: 10})).to.be.revertedWith('invalid amount')

    })
  })

  describe("Withdraw function",() =>{
    it("should revert when amount is not equal to user balance", async () => {
      const valueOfEther = ethers.utils.parseEther("2")
    await PbankContract.connect(account1).deposit(valueOfEther)

    await PbankContract.connect(account1).Withdraw(valueOfEther)
    })
    
  })

})