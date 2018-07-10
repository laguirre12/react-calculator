class GetSetNode {
  constructor(value) {
    this.left_ = null;
    this.right_ = null;
    this.value_ = value;
  }

  /* getters & setters below */
  get left() {
    return this.left_;
  }

  get right() {
    return this.right_;
  }

  set left(newLeft) {
    this.left_ = newLeft;
  }

  set right(newRight) {
    this.right_ = newRight;
  }

}
