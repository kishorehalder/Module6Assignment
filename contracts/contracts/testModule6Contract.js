const { expect } = require("chai");

describe("Module6Contract", function() {
  let Module6Contract, contract, owner, addr1;

  beforeEach(async function() {
    YourContract = await ethers.getContractFactory("YourContract");
    [owner, addr1] = await ethers.getSigners();
    contract = await YourContract.deploy();
    await contract.deployed();
  });

  it("Should get and set the state variable", async function() {
    await contract.setStateVariable("Hello");
    expect(await contract.getStateVariable()).to.equal("Hello");

    await expect(contract.connect(addr1).setStateVariable("Hi")).to.be.revertedWith("Ownable: caller is not the owner");
  });
});
