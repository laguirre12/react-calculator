class Calculator {

  constructor(operations) {
    if (!Array.isArray(operations)) {
      operations = [];
    }

    this.operations_ = Array.from(operations);
    this.map_ = new Map();
    operations.forEach(op => {
      this.map_.set(op.token, op);
    });
  }

  registerOperation(op) {
    this.operations_.push(op);
  }

  evaluate(expression) {
  }
}


class Node {
  constructor(value) {
    this.left_ = null;
    this.right_ = null;
    this.value_ = value;
  }

  /* fluent interface methods */
  left(newLeft) {
    if (newLeft) {
      this.left_ = newLeft;
      return this;
    }
    return this.left_;
  }

  right(newRight) {
    if (newRight) {
      this.right_ = newRight;
      return this;
    }
    return this.right_;
  }
}

class ExpressionTree {
  constructor(root, operations) {
    this.root_ = root;
    this.operations_ = operations;
  }

  isOperator(value) {
    return this.operations_.has(value);
  }

  static fromInfix(expression, operations) {
    return new ExpressionTree();
  }

  static fromPostfix(expression, operations) {
    stack = [];
    Node t = ;
    characters = expression.split('');
  }

  static fromPrefix(expression, operations) {
    return new ExpressionTree();
  }
}

module.exports = Calculator;
