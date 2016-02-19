function loadUsers (userIds, load, done) {
  var users = [];
  var count = 0;
  userIds.forEach(function(id, indexId) {
    load(id, function(data) {
      users[indexId] = data;
      ++count;
      if (count === userIds.length) {
        return done(users);
      };
    });
  });
}

module.exports = loadUsers;