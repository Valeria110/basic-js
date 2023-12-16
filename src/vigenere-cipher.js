const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct = direct;
    this.key = '';
    this.plaintext = '';
  }

  prepareForEncryption(plaintext, key) {
    if (!plaintext || !key) {
      throw new Error("Incorrect arguments!");
    }

    plaintext = plaintext.toUpperCase();
    key = key.toUpperCase();

    if (key.length < plaintext.length) {
      do {
        key = key.repeat(2)
      } while (key.length < plaintext.length)
    }

    key = key.slice(0, plaintext.length);
    this.key = key;
    this.plaintext = plaintext;
  }

  encrypt(plaintext, key) {
    this.prepareForEncryption(plaintext, key);

    let encryptedText = '';
    let keyIndex = 0;

    for (let i = 0; i < plaintext.length; i += 1) {
      const change = this.key.charCodeAt(i - keyIndex) - 65;

      if (this.plaintext.charCodeAt(i) < 65 || this.plaintext.charCodeAt(i) > 91) {
        encryptedText += this.plaintext[i];
        keyIndex += 1;
      } else {
        encryptedText += String.fromCharCode((this.plaintext.charCodeAt(i) - 65 + change) % 26 + 65);
      }
    }

    if (this.direct) return encryptedText;

    return encryptedText.split('').reverse().join('');
  }

  decrypt(plaintext, key) {
    this.prepareForEncryption(plaintext, key);

    let encryptedText = '';
    let keyIndex = 0;

    for (let i = 0; i < plaintext.length; i += 1) {
      const change = this.key.charCodeAt(i - keyIndex) - 65;

      if (this.plaintext.charCodeAt(i) < 65 || this.plaintext.charCodeAt(i) > 91) {
        encryptedText += this.plaintext[i];
        keyIndex += 1;
      } else {
        encryptedText += String.fromCharCode((this.plaintext.charCodeAt(i) - 65 - change + 26) % 26 + 65);
      }
    }

    if (this.direct) return encryptedText;

    return encryptedText.split('').reverse().join('');
  }
}

const reverseMachine = new VigenereCipheringMachine(true);
console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'))

module.exports = {
  VigenereCipheringMachine
};
