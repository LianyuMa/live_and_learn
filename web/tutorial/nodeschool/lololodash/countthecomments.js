const _ = require('lodash');

module.exports = (list) => _.chain(list).groupBy('username')
.map((item, name) => ({ username: name, comment_count: _.size(item) }))
.sortBy((counted) => - counted.comment_count);
