import Block from '../src/lib/block';
import {describe, expect, test, beforeAll} from '@jest/globals';

describe("Block tests", () => {

    let genesis: Block;

    beforeAll(() => {
        genesis = new Block(0, "", "Genesis Block");
    })

test('should be valid', () => {
    const block = new Block(1, genesis.hash, "Block 2");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toEqual(true);
    //expect(valid).toBeTruthy(); // pode usar assim ou a linha de cima
})

test('should NOT be valid (previous hash)', () => {
    const block = new Block(1, "", "Block 3");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toBeFalsy();
    
})

test('should NOT be valid (timestamp)', () => {
    const block = new Block(1, genesis.hash, "Block 3");
    block.timestamp = -1;
    block.hash = block.getHash();
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toBeFalsy();
    
})

test('should NOT be valid (hash)', () => {
    const block = new Block(1, genesis.hash, "Block 3");
    block.hash = "";
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toBeFalsy();
    
})

test('should NOT be valid (data)', () => {
    const block = new Block(1, genesis.hash, "");    
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toBeFalsy();
    
})

test('Should NOT be valid (index)', () => {
    const block = new Block(-1, genesis.hash, "Block 3");
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toBeFalsy();
    
})

})