var contract = artifacts.require("Polls");

module.exports = function(deployer) {
  deployer.deploy(contract);
};