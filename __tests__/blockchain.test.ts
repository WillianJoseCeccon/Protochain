import Block from '../src/lib/block';
import Blockchain from '../src/lib/blockchain';
import {describe, expect, test, jest} from '@jest/globals';

jest.mock('../src/lib/block');

describe("Block tests", () => {

    test('should has genesis blocks', () => {
    const blockchain = new Blockchain();
    expect(blockchain.blocks.length).toEqual(1);
    //expect(valid).toBeTruthy(); // pode usar assim ou a linha de cima
})

test('should be valid (genesis)', () => {
    const blockchain = new Blockchain();
    expect(blockchain.isValid().sucess).toEqual(true);
    //expect(valid).toBeTruthy(); // pode usar assim ou a linha de cima
})

test('should be valid (two blocks)', () => {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block({
        index: 1,
        previousHash: blockchain.blocks[0].hash,
        data: "Block 2"
    } as Block));
    expect(blockchain.isValid().sucess).toEqual(true);
    //expect(valid).toBeTruthy(); // pode usar assim ou a linha de cima
})

test('should NOT be valid', () => {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block({
        index: 1,
        previousHash: blockchain.blocks[0].hash,
        data: "Block 2"
    } as Block));
    blockchain.blocks[1].index = -1;
    expect(blockchain.isValid().sucess).toEqual(false);    
})

test('Should add block', () => {
    const blockchain = new Blockchain();
    const result = blockchain.addBlock(new Block({
        index: 1,
        previousHash: blockchain.blocks[0].hash,
        data: "Block 2"
    } as Block));    
    expect(result.sucess).toEqual(true);
    //expect(valid).toBeTruthy(); // pode usar assim ou a linha de cima
})

test('Should get block', () => {
    const blockchain = new Blockchain();
    const block = blockchain.getBlock(blockchain.blocks[0].hash);    
    expect(block).toBeTruthy();
})

test('Should NOT add block', () => {
    const blockchain = new Blockchain();
    const block = new Block(new Block({
        index: -1,
        previousHash: blockchain.blocks[0].hash,
        data: "Block 2"
    } as Block));
    const result = blockchain.addBlock(block);
    expect(result.sucess).toEqual(false);    
})

})