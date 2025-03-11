class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// This is wrong for now
class BinaryTree {
  constructor(l) {
    this.root = null;
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

const tree = new BinaryTree();

tree.insert(5, null);
tree.insert(null, 6);
