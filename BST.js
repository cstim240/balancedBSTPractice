export function balancedBST(){
    class Node {
      constructor(data) {
          this.data = data;
          this.left = null;
          this.right = null;
      }
    }

    return {
        root: null,
        elementCount: 0, //number of nodes in the tree

        // Takes an array of data and turns it into a balanced BST full of Node objects 
        // dont forget to sort and remove duplicates
        // the buildTRee function should return the level-0 root node.
        buildTree(array){
          array = this.sort(array);
          array = this.removeDuplicates(array);
          return this.buildTreeHelper(array, 0, array.length - 1);
        }, 

        //helper function for buildTree
        buildTreeHelper(array, start, end){
          //base case
          if (start > end){
            return null;
          }

          //get the mid element and make it the root
          const mid = Math.floor((start + end) / 2);
          const node = new Node(array[mid]);
          
          //recursively construct the left subtree and make it hte left child of the root 
          node.left = this.buildTreeHelper(array, start, mid - 1);

          //recursively construct the right subtree and make it the right child of the root
          node.right = this.buildTreeHelper(array, mid + 1, end);
          return node;
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

        //removes duplicates from array
        removeDuplicates(array){
          return array.filter((item, index) => array.indexOf(item) === index);
          //array.filter() creates a new array with all elements that pass the test implemented by the provided function
          //item is the current element being processed in the array
          //index is the index of the current element being processed in the array
          //array.indexOf(item) returns the first index at which a given element can be found in the array, or -1 if it is not present
          // if the index of the current element is equal to the index of the first occurence of the element, then the element is unique
        },

        //sort array in ascending order
        // uses merge sort, time complexity is O(n log n)
        sort(array){
          if (array.length <= 1){
            return array;
          }

          const mid = Math.floor(array.length / 2);
          const left = array.slice(0, mid); //gets all elements from start to mid of array (not including mid element)
          const right = array.slice(mid); //gets all elements from mid to end of array

          return this.merge(this.sort(left), this.sort(right));
        },

        //part of sort function
        merge(left, right){
          let resultArray = [];
          let leftIndex = 0;
          rightIndex = 0;

          while (leftIndex < left.length && rightIndex < right.length){
            if (left[leftIndex < right[rightIndex]]){
              resultArray.push(left[leftIndex]);
              leftIndex++;
            } else {
              result.push(right[rightIndex]);
              rightIndex++;
            }
          }

          //concatenate the remaining elements of left and right arrays
          return resultArray.concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));

        },

        //remove duplicates from array
        removeDuplicates(array){

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