var dashCase = require('dgeni/lib/utils/dash-case');
module.exports = {
  name: 'dashCase',
  process: function(str) {
    var output = dashCase(str);
    return output;
  }
};