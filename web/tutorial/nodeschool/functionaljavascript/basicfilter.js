function getShortMessages(messages) {
  return messages.filter(function (member) {
    return member.message.length < 50;
  }).map(function (mem) {
    return mem.message;
  });
}

module.exports = getShortMessages;