//As soon as one bad user is found, it exits, rather than processing every single submittedUser
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return !submittedUsers.some(function(submittedUser) {
      return !goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });
  };
}

module.exports = checkUsersValid;