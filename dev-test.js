//File that allows me to explore the block.js class

/*Creates a block and sets it to create the block using the block.js class
referenced using './block' as if you are using the command line.*/
const Block = require('./block');

//Adding in test data and testing it
const block = new Block('foo', 'bar', 'zoo', 'baz');
console.log(block.toString());
console.log(Block.genesis().toString());

/*Run by opening to wyo-chain folder and inputting 
 npm run dev-test 
 in the command line. 
 
 Also don't forget you had to change the package.json file
 to allow dev-test to be run using the nodemon package
 */