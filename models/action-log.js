module.exports = function ActionLogModule(mongoose) {
  "use strict";

  var Schema = mongoose.Schema;

  var modelSchema = new Schema({
    _id: {
      type: Schema.ObjectId,
      auto: true
    },
    departmentId: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      default: ""
    },
    object: {
      type: Object
    },
    modified_unix_date: {
      type: Number,
      default: new Date().valueOf() / 1000.0
    }
  }, {
    collection: "massive_action_log"
  });
  modelSchema.set("autoIndex", false);

  // Hack for mocha that loads the same models twice
  var Model;
  if (mongoose.models.ActionLog) {
    Model = mongoose.model("ActionLog");
  } else {
    Model = mongoose.model("ActionLog", modelSchema);
  }

  return Model;
};
