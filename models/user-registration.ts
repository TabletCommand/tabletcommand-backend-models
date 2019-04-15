module.exports = function UserRegistrationModule(mongoose) {
  "use strict";

  var Schema = mongoose.Schema;

  var modelSchema = new Schema({
    email: {
      type: String,
      default: "",
      required: true,
      index: true
    },
    name: {
      type: String,
      default: "",
      required: true
    },
    firstName: {
      type: String,
      default: ""
    },
    lastName: {
      type: String,
      default: ""
    },
    department: {
      type: String,
      default: "",
      required: true
    },
    title: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: ""
    },
    modifiedDate: {
      type: Number,
      required: true,
      default: 0,
      min: 1
    },
    presentedAt: {
      type: Number,
      default: 0
    },
    managedIncidentsCount: {
      type: Number,
      default: 0
    },
    checklistsCount: {
      type: Number,
      default: 0
    },
    stage: {
      type: String,
      default: ""
    },
    firstIncidentUnixTime: {
      type: Number,
      default: 0
    },
    lastIncidentLocation: {
      type: String,
      default: ""
    },
    lastIncidentUnixTime: {
      type: Number,
      default: 0
    }
  }, {
    collection: "massive_user_registration"
  });
  modelSchema.set("autoIndex", false);

  // Hack for mocha that loads the same models twice
  var Model;
  if (mongoose.models.UserRegistration) {
    Model = mongoose.model("UserRegistration");
  } else {
    Model = mongoose.model("UserRegistration", modelSchema);
  }

  return Model;
};
