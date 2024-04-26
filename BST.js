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

        //insert a given value into BST
        // if the tree is empty, the value should be the root node
        // if the tree is not empty, the value should be inserted in the correct position
        // does not return anything
        insert(value){
            const newNode = new Node(value);
            if (this.root === null) {
              this.root = newNode;
            } else {
              this.root = this.insertHelper(this.root, value);
            }
            this.elementCount++;
        }, 

        //helper function for insert
        //returns the parent node with the new node inserted
        insertHelper(parentNode, value){
          if (parentNode === null){
            parentNode = new Node(value);
            return parentNode;
          } else if (value < parentNode.data){
            parentNode.left = this.insertHelper(parentNode.left, value);
          } else if (value > parentNode.data){
            parentNode.right = this.insertHelper(parentNode.right, value);
          } else {
            //value already exists in the tree
            return parentNode;
          }
        },

        //delete a given value from BST - returns null if the tree is empty, otherwise returns root node of updated tree
        //this doesn't balance the tree
        //checks if value is in the tree, if it is, it deletes the node and returns the root node of the updated tree without the deleted item, if not, it returns null
        // cases: deleting a leaf node, deleting a node with one child, deleting a node with two children, deleting empty tree
        deleteItem(value){
          this.root = this.deleteHelper(this.root, value);

          return this.root;
        },

        //helper function for deleteItem
        deleteHelper(node, value){
          if (node === null){
            return node;
          } 

          if (value < node.value){
            node.left = this.deleteHelper(node.left, value);
          } else if (value > node.value){
            node.right = this.deleteHelper(node.right, value);
          } else {
            //if the value is the same as the node's value, then this is the node to be deleted

            //node with only one child or no child
            if (node.left === null){
              return node.right;
            } else if (node.right === null){
              return node.left;
            }

            //node with 2 children: get the inorder successor (smallest in the right subtree)
            node.value = this.getSuccessor(node.right);
            //delete the inorder successor
            node.right = this.deleteHelper(node.right, node.value);
          }

          return node;

          //recursively find the node to be deleted

        },

        getSuccessor(node){
          let minv = node.value;
          while (node.left !== null){
            minv = node.left.value;
            node = node.left;
          }
          return minv;
        },


        //function that returns the node with the given value
        // cases to consider: tree is empty, value is not in the tree, value is in the tree
        //returns null if tree is empty/not in tree, returns node if value is in tree
        find(value){
          return this.findHelper(this.root, value);
        }, 

        //helper function for find
        findHelper(node, value){
          if (node === null){ //tree is empty or value is not in the tree (base case)
            return null;
          } else if (value < this.root.value){ //value is less than the root value
            return this.findHelper(node.left, value);
          } else if (value > this.root.value){ //value is greater than the root value
            return this.findHelper(node.right, value);
          } else {
            return node; //value is in the tree
          }
        },

        // O(n) time complexity for all cases, O(n) space complexity. 
        //accepts an optional callback function as its parameter.
        // traverses the tree in breadth-first order and provide each node as an argument to the callback. 
        // as a result, the callback will perform an operation on each node following the order in which they are traversed. 
        // level order may be implmented using either iteration or recursion.
        // the method should return an array of values if no callback is given as an argument
        // hint: you will want to use an array acting as a queue to keep track of the nodes that you have yet to traverse and to add new ones to the list
        levelOrder(callback){
          //when callback function is provided, levelOrder will call THIS function for each node it visits during the traversal
          // this allows you to perform some operation on each node. IE. print each node's value to the console
          // if no callback function is provided, levelOrder will return an array of values in the order in which they were visited during the traversal

          const result = [];
          const queue = [];
          if (this.root !== null){
            queue.push(this.root);

            //while there are nodes in the queue
            while (queue.length > 0){
              const node = queue.shift(); //removes the first element from the queue and returns it

              if (callback){ //if a callback function is provided
                callback(node);
              } 

              else { //if no callback function is provided
                result.push(node.value);
              }

              //enqueue left child
              if (node.left) {
                queue.push(node.left);
              } 

              //enqueue right child
              if (node.right){
                queue.push(node.right);
              }
            }
          }

          if (!callback){ //if no callback function is provided
            return result;
          }

        }, 

        //description: traverses the tree in order (left, center, right) and provides each node as an argument to the callback
        // it should return an array of values if no callback is given as an argument
        inOrder(callback){
          const values = [];
           this.inOrderHelper(this.root, node => {
              values.push(node.value);
              if (callback) callback(node);
           });
           return values;
        }, 

        //inOrder helper function
        inOrderHelper(node, callback){
          if (node !== null){
            this.inOrderHelper(node.left, callback);
            callback(node);
            this.inOrderHelper(node.right, callback);
          } 
        },

        preOrder(callback){
          const values = [];
          this.preOrderHelper(this.root, node => {
            values.push(node.value);
            if (callback) callback(node);
          });
          return values;
        },

        preOrderHelper(node, callback){
          if (node !== null){
            callback(node);
            this.preOrderHelper(node.left, callback);
            this.preOrderHelper(node.right, callback);
          }
        },

        postOrder(callback){
          const values = [];
          this.postOrderHelper(this.root, node => {
            values.push(node.value);
            if (callback) callback(node);
          });
          return values;
        },

        postOrderHelper(node, callback){
          if (node !== null){
            this.postOrderHelper(node.left, callback);
            this.postOrderHelper(node.right, callback);
            callback(node);
          }
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