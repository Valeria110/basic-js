const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length: 0,
  chains: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.chains.push(`( ${value} )`);
    this.length += 1;
    return this;
  },
  removeLink(position) {
    if (!this.chains[position - 1]) {
      this.chains = [];
      this.length = 0;
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chains.splice(position - 1, 1);
      this.length -= 1;
      return this;
    }
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    const finishedChain = this.chains.join('~~');
    this.chains = [];
    this.length = 0;
    return finishedChain;
  }
};

module.exports = {
  chainMaker
};
