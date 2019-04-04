module.exports = function RateLimitModule(mongoose) {
  "use strict";

  var Schema = mongoose.Schema;

  var modelSchema = new Schema({
    _id: {
      type: Schema.ObjectId,
      auto: true
    },
    username: String,
    modified_unix_date: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  }, {
    collection: "massive_rate_limit"
  });
  modelSchema.set("autoIndex", false);

  // Hack for mocha that loads the same models twice
  var Model;
  if (mongoose.models.RateLimit) {
    Model = mongoose.model("RateLimit");
  } else {
    Model = mongoose.model("RateLimit", modelSchema);
  }

  return Model;
};
