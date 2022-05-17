import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function AgencyCronSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const EncryptedData = createSchema(Schema, {
    iv: {
      type: String,
      default: "",
    },
    encryptedData: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const AgencyCronConfig = createSchema(Schema, {
    enabled: {
      type: Boolean,
      default: false,
    },
    sourcePath: {
      type: EncryptedData,
      default: null,
    },
    processPath: {
      type: String,
      default: "",
    },
    completedPath: {
      type: String,
      default: "",
    },
    importType: {
      type: String,
      default: "",
    },
    sshPrivateKey: {
      type: EncryptedData,
      default: null,
    },
    sshPublicKey: {
      type: EncryptedData,
      default: null,
    },
    useSSHKey: {
      type: Boolean,
      default: false,
    },
    timezone: {
      type: String,
      default: ""
    },
    customApiPath: {
      type: String,
      default: "",
    }
  }, {
    _id: false,
    id: false,
  });

  return AgencyCronConfig;
}