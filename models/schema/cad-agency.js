module.exports = function CADAgency(mongoose) {
  "use strict";
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

  return Agency;
};
