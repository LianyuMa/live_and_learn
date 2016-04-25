const _ = require('lodash');

module.exports = (item) => _.template('Hello <%= value %> (logins: <%= num %>)')({
  value: item.name,
  num: item.login.length,
});
