var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Agency = new Schema({
  code: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  domain: {
    type: String,
    default: ""
  }
}, {
  _id: false
});

module.exports = mongoose.model("Agency", Agency);
