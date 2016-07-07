#! /usr/bin/env node

var program = require('commander');
var Promise = require('bluebird');
var gs = require('../lib/generateStructure');
var wf = require('../lib/withoutFile');

program
  .version(require('../package.json').version)
  .usage('[options] [project name]')
  .parse(process.argv);

var pname = program.args[0]
if (!pname) program.help();

Promise.all([gs(pname)])
  .then(function() {
    return wf(pname, ['jade', 'sass']);
  });
