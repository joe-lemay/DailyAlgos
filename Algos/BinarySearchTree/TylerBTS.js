/**
* DFS Preorder: (CurrNode, Left, Right)
* Converts this BST into an array following Depth First Search preorder.
* Example:
* [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
* @param {Node} node The current node during the traversal of this tree.
* @param {Array<number>} vals The data that has been visited so far.
* @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
*/
toArrPreorder(node = this.root, vals = []){
    if (this.isEmpty()) {
        return vals;
    }
    if (node) {
        vals.push(node.data)
        this.toArrPreorder(node.left, vals)
        this.toArrPreorder(node.right, vals)
    }
    return vals;
}
/**
* DFS Inorder: (Left, CurrNode, Right)
* Converts this BST into an array following Depth First Search inorder.
* Example:
* [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
* @param {Node} node The current node during the traversal of this tree.
* @param {Array<number>} vals The data that has been visited so far.
* @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
*/
toArrInorder(node = this.root, vals = []) {
    if (this.isEmpty()) {
        return vals;
    }
    if (node) {
        this.toArrPreorder(node.left, vals)
        vals.push(node.data)
        this.toArrPreorder(node.right, vals)
    }
    return vals;
}
/**
* DFS Postorder (Left, Right, CurrNode)
* Converts this BST into an array following Depth First Search postorder.
* Example on the fullTree var:
* [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
* @param {Node} node The current node during the traversal of this tree.
* @param {Array<number>} vals The data that has been visited so far.
* @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
*/

toArrPostorder(node = this.root, vals = []) {
    if (this.isEmpty()) {
        return vals;
    }
    if (node) {
        this.toArrPreorder(node.left, vals)
        this.toArrPreorder(node.right, vals)
        vals.push(node.data)
    }
    return vals;
} //! END THURSDAY