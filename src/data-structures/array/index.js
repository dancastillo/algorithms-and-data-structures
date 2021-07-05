const Array = function() {
  this.length = 0;
  this.data = [];
};

/**
 * @return void
 */
Array.prototype = {

  print: function() {
    console.log(this.data);
  },

  /**
   * @param {*} element
   */
  push: function(element) {
    this.data[this.length] = element;
    this.length++;
  },

  /**
   * @return void
   */
  pop: function() {
    delete this.data[this.length - 1];
    this.length--;
  },

  insertAt: function(element, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = element;
    this.length++;
  },

  deleteAt: function(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length--;
  },
};
