import Validation from '../validation';

/**
 * Mocked block class
 */
export default class Block {;

    index: number;
    timestamp: number;
    hash: string;
    previousHash: string;
    data: string;

    /**
     * Creates a new mock block
     * @param index The mock block data
     */

    constructor(block?: Block){ //block? => interrogação faz o parametro ser opcional.
        this.index = block?.index || 0;
        this.timestamp = block?.timestamp || Date.now();
        this.previousHash = block?.previousHash || "";
        this.data = block?.data || "";
        this.hash = block?.hash || this.getHash();


    }

    getHash(): string {
        return this.hash || "abc";
    }

    /**
     * Validates the mock block
     * @returns Returns if the mock block is valid
     */
    isValid(previousHash: string, previousIndex : number): Validation {
        if(!previousHash || previousIndex < 0 || this.index < 0)
            return new Validation(false, "Invalid mock block");
        return new Validation();
    }

}