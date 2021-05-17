import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function EsriGroupModule(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const EsriGroupUser = createSchema(Schema, {
    username: {
      type: String,
      default: "",
    },
    fullName: {
      type: String,
      default: "",
    },
    memberType: {
      type: String,
      default: "",
    },
    orgId: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
  });

  const EsriGroup = createSchema(Schema, {
    groupId: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    }, 
    protected: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: String,
      default: "",
    },
    access: {
      type: String,
      default: "",
    },
    users: {
      type: [EsriGroupUser],
      default: [],
    },
    outsiders: {
      type: [EsriGroupUser],
      default: [],
    },
    externalOrgIds: {
      type: [String],
      default: [],
    },
  }, {
    _id: false,
  });

  return EsriGroup;
}
