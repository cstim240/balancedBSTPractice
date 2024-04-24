class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export function balancedBST(){
    return {
        root: null,

        // Takes an array of data and turns it into a balanced BST full of Node objects 
        buildTree(array){

        }, 

        // Visualizes BST  in a structured format in the console
        prettyPrint(){
            const prettyPrint = (node, prefix = "", isLeft = true) => {
                if (node === null) {
                  return;
                }
                if (node.right !== null) {
                  prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
                }
                console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
                if (node.left !== null) {
                  prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
                }
              };
        }, 

        //insert a given value into BST
        insert(value){

        }, 

        //delete a given value from BST
        deleteItem(value){

        },

        //function that returns the node with the given value
        find(value){

        }, 

        //accepts an optional callback function as its parameter.
        // traverses the tree in breadth-first order and provide each node as an argument to the callback. 
        // as a result, the callback will perform an operation on each node following the order in which they are traversed. 
        // level order may be implmented using either iteration or recursion.
        // the method should return an array of values if no callback is given as an argument
        // hint: you will want to use an array acting as a queue to keep track of the nodes that you have yet to traverse and to add new ones to the list
        levelOrder(callback){

        }, 

        inOrder(callback){

        }, 

        preOrder(callback){

        },

        postOrder(callback){

        },

        isBalanced(){},

        //returns the given node's depth. Depth is defined as the number of edges in the longest path from a given node to a leaf node.
        height(node){

        }, 

        //rebalances an unbalanced tree. Tip: use the traversal method to provude a new array to the BuildTree method
        rebalance(){
            
        }

    }

}