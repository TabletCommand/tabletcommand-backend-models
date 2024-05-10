import {
  MongooseModule,
  createSchema,
  currentDate,
} from "../../helpers";

// Properties shared between CAD and Managed Incident
// They are copied on iOS

export function CADPersonSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Person = createSchema(Schema, {
    PersonnelID: {
      type: String,
    },
    PersonnelName: {
      type: String,
    },
    PersonnelRank: {
      type: String,
      default: ""
    },
    PersonnelWorkCode: {
      type: String,
      default: ""
    },
    PersonnelNote: {
      type: String,
      default: ""
    },
  }, {
    _id: false,
    id: false,
  });

  return Person;
}

export function RadioChannelSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const RadioChannel = createSchema(Schema, {
    name: {
      type: String,
      default: "",
    },
    channel: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    channelDescription: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
    toJSON: {
      versionKey: false,
    }
  });

  return RadioChannel;
}

export function RecordSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const Record = createSchema(Schema, {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
    toJSON: {
      versionKey: false,
    }
  });

  return Record;
}

export function ReportNumberSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const ReportNumber = createSchema(Schema, {
    name: {
      type: String,
      default: "",
    },
    number: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
    toJSON: {
      versionKey: false,
    }
  });

  return ReportNumber;
}

export function ShareReasonSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const ShareReason = createSchema(Schema, {
    name: {
      type: String,
      default: "",
    },
    date: {
      type: Date,
      default: currentDate,
    },
  }, {
    _id: false,
    id: false,
    toJSON: {
      versionKey: false,
    },
  });

  return ShareReason;
}

export function SharedToSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const ShareReason = ShareReasonSchema(mongoose);

  const SharedTo = createSchema(Schema, {
    departmentId: {
      type: String,
      default: "",
    },
    // Department Name
    name: {
      type: String,
      default: "",
    },
    startAt: {
      type: Date,
      default: currentDate,
    },
    expireAt: {
      type: Date,
      default: currentDate,
    },
    active: {
      type: Boolean,
      default: true, // overwritten later, when expireAt is older than now
    },
    reasons: {
      type: [ShareReason],
      default: [],
    }
  }, {
    _id: false,
    id: false,
    toJSON: {
      versionKey: false,
    }
  });

  return SharedTo;
}

export function SharedSourceSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;
  const ShareReason = ShareReasonSchema(mongoose);

  const SharedSource = createSchema(Schema, {
    // Department Name (always matches record .departmentId)
    name: {
      type: String,
      default: "",
    },
    // Output overwritten by backend when record is included in another department's list
    isExternal: {
      type: Boolean,
      default: false,
    },

    // Output will be overwritten by backend
    startAt: {
      type: Date,
    },
    expireAt: {
      type: Date,
    },
    reasons: {
      type: [ShareReason],
      default: [],
    }
  }, {
    _id: false,
    id: false,
    toJSON: {
      versionKey: false,
    }
  });

  return SharedSource;
}