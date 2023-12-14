const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const teamName = members.filter(item => typeof(item) === 'string')
    .map(item => item.trim().slice(0, 1).toUpperCase())
    .sort((a, b) => {
      return a < b ? -1 : 1;
    })
    .join('');

    return teamName;
}

const members = ['Olivia', 1111, 'Lily', 'Oscar', true, null];
createDreamTeam(members);

module.exports = {
  createDreamTeam
};
