export class TreeNode {
    val;
    left;
    right;
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  export function preOrder(node){
      if(!node)
    return;
    console.log(node.val);
    preOrder(node.left);
    preOrder(node.right);
  }
  export function inOrder(node){
    if(!node)
  return;
  inOrder(node.left);
  console.log(node.val);
  inOrder(node.right);
}
export function postOrder(node){
    if(!node)
  return;
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.val);
}
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  inOrder(root);