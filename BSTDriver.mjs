import {balancedBST} from './BST.mjs';
import assert from 'assert';

/* 1. Create a binary search tree from an array of random numbers < 100. You can 
create a function that returns an array of random numbers every time you call it 
if you wish */

const randomNumbers = [50, 25, 75, 10, 30, 60, 80, 5, 15, 27, 35, 55, 70, 90, 2, 7, 12, 20, 29, 33, 40, 52, 57, 65, 77, 85, 95, 1, 3, 6, 9, 11, 14, 17, 19, 22, 28, 31, 34, 37, 39, 42, 51, 53, 56, 58, 62, 67, 72, 76, 78, 82, 87, 92, 97, 4, 8, 13, 16, 18, 21, 24, 26, 32, 36, 38, 41, 45, 49, 54, 59, 63, 66, 69, 71, 74, 79, 81, 84, 88, 91, 93, 96, 98, 23, 43, 44, 46, 47, 48, 64, 68, 73, 83, 86, 89, 94, 99];
const bst = balancedBST(randomNumbers);

// 2. Confirm the tree is balanced by calling isBalanced method
assert.strictEqual(bst.isBalanced(), true);
//the assert module provides a way to write tests for your code
//the strictEqual method tests if two values are equal, using the === operator
// alternative method: assert.strictEqual(bst.isBalanced() === true);
// OR: assert(bst.isBalanced() === true); assert.equal(bst.isBalanced(), true);

// 3. Print out all elements in level, pre, post, and in-order
console.log('Level Order: ', bst.levelOrder());
console.log('Pre Order: ', bst.preOrder());
console.log('Post Order: ', bst.postOrder());


// 4. Unblanace the tree by adding several numbers > 100
console.log('Inserting to BST: 101');
bst.insert(101);
console.log('Inserting to BST: 132');
bst.insert(132);
console.log('Inserting to BST: 105');
bst.insert(105);
console.log('Inserting to BST: 103');
bst.insert(103);
console.log('Inserting to BST: 104');
bst.insert(104);
console.log('Inserting to BST: 106');
bst.insert(106);
console.log('Inserting to BST: 107');
bst.insert(107);

// 5. Confirm that the tree is unbalanced by calling isBalanced method
console.log(`Is the tree is balanced after insertion: T or F? ${bst.isBalanced()}`);

// 6. Balance the tree by calling rebalance. 
console.log('\nBalancing tree now...\n');
bst.rebalance();

// 7. Confirm that the tree is balanced by calling isBalanced.
console.log(`After calling .rebalance(). The tree is balanced: T or F? ${bst.isBalanced()}`);

// 8. Print out all the elements in level, pre, post, and in order.
console.log('Level Order: ', bst.levelOrder());
console.log('Pre Order: ', bst.preOrder());
console.log('Post Order: ', bst.postOrder());
console.log('In Order: ', bst.inOrder());