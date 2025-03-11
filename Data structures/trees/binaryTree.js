class TreeNode {
  constructor(value) {
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root == null) {
      this.root = newNode;
      return;
    }

    const insertNode = (node, newNode) => {
      if (this.left) {
        node.left = newNode;
        console.log("left node inputed", +node.left);
      } else {
        insertNode(node.left, newNode);
      }

      if (this.right) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
        console.log("right node inputed", +node.right);
      }
    };

    insertNode(this.root, newNode);
  }
}

const tree = new BinaryTree(left, right);

tree.insert(5);
tree.insert();
