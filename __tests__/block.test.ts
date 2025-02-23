import Block from '../src/lib/block';
import {describe, expect, test, beforeAll} from '@jest/globals';

describe("Block tests", () => {

    let genesis: Block;

    beforeAll(() => {
        genesis = new Block({
            data: "Genesis Block"} as Block);
    })

test('should be valid', () => {
    const block = new Block({
        index: 1,
        previousHash: genesis.hash, 
        data: "Block 2"
    } as Block);
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toEqual(true);
    //expect(valid).toBeTruthy(); // pode usar assim ou a linha de cima
})

test('should be valid (fallbacks)', () => {
    const block = new Block();
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toBeFalsy()    
})

test('should NOT be valid (previous hash)', () => {
    const block = new Block({
        index: 1,
        previousHash: "abc", 
        data: "Block 2"
    } as Block);
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toBeFalsy();
    
})

test('should NOT be valid (timestamp)', () => {
    const block = new Block({
        index: 1,
        previousHash: genesis.hash, 
        data: "Block 2"
    } as Block);
    block.timestamp = -1;
    block.hash = block.getHash();
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toBeFalsy();
    
})

test('should NOT be valid (hash)', () => {
    const block = new Block({
        index: 1,
        previousHash: genesis.hash, 
        data: "Block 2"
    } as Block);
    block.hash = "";
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toBeFalsy();
    
})

test('should NOT be valid (data)', () => {
    const block = new Block({
        index: 1,
        previousHash: genesis.hash, 
        data: ""
    } as Block);
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toBeFalsy();
    
})

test('Should NOT be valid (index)', () => {
    const block = new Block({
        index: -1,
        previousHash: genesis.hash, 
        data: "Block 2"
    } as Block);
    const valid = block.isValid(genesis.hash, genesis.index);
    expect(valid.sucess).toBeFalsy();
    
})

})