import { expect } from "chai";
import { ethers } from "hardhat";

describe("Roses", function () {
  it("Should return the metadata", async function () {
    const [deployer] = await ethers.getSigners();

    const fflateDataChunk1 = await (
      await ethers.getContractFactory("FFlateDataChunk1")
    ).deploy();
    await fflateDataChunk1.deployed();

    const fflateDataChunk2 = await (
      await ethers.getContractFactory("FFlateDataChunk2")
    ).deploy();
    await fflateDataChunk2.deployed();

    const threeDataChunk1 = await (
      await ethers.getContractFactory("ThreeDataChunk1")
    ).deploy();
    await threeDataChunk1.deployed();

    const threeDataChunk2 = await (
      await ethers.getContractFactory("ThreeDataChunk2")
    ).deploy();
    await threeDataChunk2.deployed();

    const threeDataChunk3 = await (
      await ethers.getContractFactory("ThreeDataChunk3")
    ).deploy();
    await threeDataChunk3.deployed();

    const threeDataChunk4 = await (
      await ethers.getContractFactory("ThreeDataChunk4")
    ).deploy();
    await threeDataChunk4.deployed();

    const threeDataChunk5 = await (
      await ethers.getContractFactory("ThreeDataChunk5")
    ).deploy();
    await threeDataChunk5.deployed();

    const threeDataChunk6 = await (
      await ethers.getContractFactory("ThreeDataChunk6")
    ).deploy();
    await threeDataChunk6.deployed();

    const threeDataChunk7 = await (
      await ethers.getContractFactory("ThreeDataChunk7")
    ).deploy();
    await threeDataChunk7.deployed();

    const threeDataChunk8 = await (
      await ethers.getContractFactory("ThreeDataChunk8")
    ).deploy();
    await threeDataChunk8.deployed();

    const threeDataChunk9 = await (
      await ethers.getContractFactory("ThreeDataChunk9")
    ).deploy();
    await threeDataChunk9.deployed();

    const dataChunkCompiler = await (
      await ethers.getContractFactory("DataChunkCompiler")
    ).deploy();
    await dataChunkCompiler.deployed();

    const setFFlateAddressTx = await dataChunkCompiler.setFFlateAddress(
      fflateDataChunk1.address,
      fflateDataChunk2.address
    );
    await setFFlateAddressTx.wait();

    const helloWorldsRenderer = await (
      await ethers.getContractFactory("HelloWorldsRenderer")
    ).deploy();
    await helloWorldsRenderer.deployed();

    const setCompilerAddressTx = await helloWorldsRenderer.setCompilerAddress(
      dataChunkCompiler.address
    );
    await setCompilerAddressTx.wait();

    const setThreeAddressTx = await helloWorldsRenderer.setThreeAddress(
      threeDataChunk1.address,
      threeDataChunk2.address,
      threeDataChunk3.address,
      threeDataChunk4.address,
      threeDataChunk5.address,
      threeDataChunk6.address,
      threeDataChunk7.address,
      threeDataChunk8.address,
      threeDataChunk9.address
    );
    await setThreeAddressTx.wait();

    const roses = await (await ethers.getContractFactory("Roses")).deploy();
    await roses.deployed();

    const setRendererTx = await roses.setRenderer(helloWorldsRenderer.address);
    await setRendererTx.wait();

    // const mintTx = await roses.mint(deployer.address);
    // await mintTx.wait();
    expect(await roses.ownerOf(1)).to.equal(deployer.address);

    // console.log(await roses.tokenURI(1));

    // test

    const testAsciiRenderer = await (
      await ethers.getContractFactory("TestAsciiRenderer")
    ).deploy();
    await testAsciiRenderer.deployed();

    const setCompilerAddressTxTest = await testAsciiRenderer.setCompilerAddress(
      dataChunkCompiler.address
    );
    await setCompilerAddressTxTest.wait();

    const setThreeAddressTxTest = await testAsciiRenderer.setThreeAddress(
      threeDataChunk1.address,
      threeDataChunk2.address,
      threeDataChunk3.address,
      threeDataChunk4.address,
      threeDataChunk5.address,
      threeDataChunk6.address,
      threeDataChunk7.address,
      threeDataChunk8.address,
      threeDataChunk9.address
    );
    await setThreeAddressTxTest.wait();

    const testNft = await (await ethers.getContractFactory("Test")).deploy();
    await testNft.deployed();

    const setRendererTxTestNft = await testNft.setRenderer(
      testAsciiRenderer.address
    );
    await setRendererTxTestNft.wait();

    console.log(await testNft.tokenURI(1));
  });
});
