const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru', ['code', 'yandex', 'ru']
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = new Object();

  domains.forEach(item => {
    let arr = item.split('.');

    for (let i = 0; i < arr.length; i += 1) {
      let stat = '.' + arr.slice(i).reverse().join('.');

      if (dnsStats.hasOwnProperty(stat)) {
        dnsStats[stat] += 1;
      } else if (!dnsStats.hasOwnProperty(stat)) {
        dnsStats[stat] = 1;
      }
    }
  })

  return dnsStats;
}

module.exports = {
  getDNSStats
};
