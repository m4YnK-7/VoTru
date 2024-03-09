var Voting = artifacts.require("Election");

module.exports = function(deployer) {
  deployer.deploy(Voting);
};