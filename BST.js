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

        }
    }

}