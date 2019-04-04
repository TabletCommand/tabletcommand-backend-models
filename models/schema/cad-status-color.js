module.exports = function RateLimitModule(mongoose) {
  "use strict";

  var Schema = mongoose.Schema;

  var CADStatusColor = new Schema({
    background: {
      type: String,
      default: "#851414" // Red-like
    },
    text: {
      type: String,
      default: "#F8F8F8" // White-like
    }
  }, {
    _id: false
  });

  return CADStatusColor;
};
