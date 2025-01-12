import Block from '../src/lib/block';
import Blockchain from '../src/lib/blockchain';
import {describe, expect, test} from '@jest/globals';


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
    blockchain.addBlock(new Block(1, blockchain.blocks[0].hash, "Block 2"));
    expect(blockchain.isValid().sucess).toEqual(true);
    //expect(valid).toBeTruthy(); // pode usar assim ou a linha de cima
})

test('should NOT be valid', () => {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block(1, blockchain.blocks[0].hash, "Block 2"));
    blockchain.blocks[1].data = "A transfere 2 para b";
    expect(blockchain.isValid().sucess).toEqual(false);    
})

test('Should add block', () => {
    const blockchain = new Blockchain();
    const result = blockchain.addBlock(new Block(1, blockchain.blocks[0].hash, "Block 2"));    
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
    const block = new Block(-1, blockchain.blocks[0].hash, "Block 2")
    const result = blockchain.addBlock(block);
    expect(result.sucess).toEqual(false);    
})

})