const _ = require('lodash');
const filterActive = (users) => _.filter(users, { active: true });

module.exports = filterActive;
