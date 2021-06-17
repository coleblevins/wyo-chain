//Block class that creates the block

class Block{

    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block -
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash.substring(0,10)}
            Hash     : ${this.hash.substring(0,10)}
            Data     : ${this.data}`;
    }
    //Uses static to enable us to call the genesis function w/out 
    //having to make a new instance of the block class
    static genesis() {
        return new this('Genesis time', '-----', 'first hash', []);
    }

    //Function to mine a block
    static mineBlock(lastBlock, data) {
        const timestamp = Date.now(); //time in milliseconds
        const lastHash = lastBlock.hash;
        const hash = 'todo-hash';
        //data is already included in the arguments
        
        return new this(timestamp, lastHash, hash, data);
    }
}

//Allows for other files to reference and use the block class
module.exports = Block;