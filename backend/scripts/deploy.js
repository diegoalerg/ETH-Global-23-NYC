const { ethers, run, network } = require("hardhat");

async function main() {
  const fanToken = await ethers.deployContract('FanToken');
  await fanToken.waitForDeployment();

  console.log('FanToken contract deployed to:', fanToken.target);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
