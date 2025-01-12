import Block from "./block";
import Validation from "./validation";

/*
let x : number = 1;
let nome : string;
let dataNascimento : Date;

function somar(n1 : number, n2 : number){
    return n1 + n2;
}

console.log(somar(7,8));

*/

/**
 * Creates a class Blockchain
 */
export default class Blockchain {
    blocks: Block[];
    nextIndex: number = 0;

    /**
     * Create a Block construtor genesis
     */
    constructor(){
        this.blocks = [new Block({
            index: this.nextIndex,
            previousHash: "",
            data: "Genesis Block"
        } as Block)];
        this.nextIndex++;
    }

    getLastBlock(): Block {
        return this.blocks[this.blocks.length -1];
    }
    addBlock(block: Block) : Validation {
        const lastBlock = this.getLastBlock();

        const validation = block.isValid(lastBlock.hash, lastBlock.index);
        if (!validation.sucess)
            return new Validation(false, `Invalid Block. ${validation.message}`);
        
        this.blocks.push(block);
        this.nextIndex++;
        return new Validation();
    }

    getBlock(hash: string) : Block | undefined {
        return this.blocks.find(b => b.hash === hash);
    }
    isValid() : Validation {
        for(let i=this.blocks.length -1; i >0; i--){
            const currentBlock = this.blocks[i];
            const previousBlock = this.blocks[i - 1];
            const validation = currentBlock.isValid(previousBlock.hash, previousBlock.index);
            if (!validation.sucess) return new Validation(false, `Invalid Block: ${currentBlock.index}: ${validation.message}`);
        }
        return new Validation();
    }


}

