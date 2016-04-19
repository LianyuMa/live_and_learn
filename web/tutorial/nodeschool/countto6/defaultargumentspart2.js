module.exports = function makeImportant(string, bang = string.length) {
  return string + '!'.repeat(bang);
};
