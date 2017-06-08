var _ = require('lodash')
module.exports = {
  requireAll: function (r) {
    _.each(r.keys(), r)
  }
}
