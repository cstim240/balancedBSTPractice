import {balancedBST} from './BST.mjs';
import assert from 'assert';

/* 1. Create a binary search tree from an array of random numbers < 100. You can 
create a function that returns an array of random numbers every time you call it 
if you wish */

let randomNumbers = [20, 15, 90, 36, 50];

const bst = new balancedBST();
bst.buildTree(randomNumbers);

bst.prettyPrint();


// 2. Confirm the tree is balanced by calling isBalanced method
assert.strictEqual(bst.isBalanced(), true);
//the assert module provides a way to write tests for your code
//the strictEqual method tests if two values are equal, using the === operator
// alternative method: assert.strictEqual(bst.isBalanced() === true);
// OR: assert(bst.isBalanced() === true); assert.equal(bst.isBalanced(), true);

// 3. Print out all elements in level, pre, post, and in-order
console.log(`\nLevel Order: ${bst.levelOrder()}`);
console.log(`\nPre Order: ${bst.preOrder()}`);
console.log(`\nPost Order: ${bst.postOrder()}`);
console.log(`\nIn Order: ${bst.inOrder()}`);


// 4. Unbalance the tree by adding several numbers > 100
console.log('\nInserting to BST: 101');
bst.insert(101);
console.log('Inserting to BST: 132');
bst.insert(132);
console.log('Inserting to BST: 105');
bst.insert(105);


// 5. Confirm that the tree is unbalanced by calling isBalanced method
console.log(`\nIs the tree is balanced after insertion: T or F? ${bst.isBalanced()}`);

// 6. Balance the tree by calling rebalance. 
console.log('\nBalancing tree now...\n');
bst.rebalance();

// 7. Confirm that the tree is balanced by calling isBalanced.
console.log(`\nAfter calling .rebalance(). The tree is balanced: T or F? ${bst.isBalanced()}`);

// 8. Print out all the elements in level, pre, post, and in order.
console.log(`\nLevel Order: ${bst.levelOrder()}`);
console.log(`\nPre Order: ${bst.preOrder()}`);
console.log(`\nPost Order: ${bst.postOrder()}`);
console.log(`\nIn Order: ${bst.inOrder()}`);

bst.prettyPrint();


