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

  const CronConfigSource = createSchema(Schema, {
    protocol: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: "",
    },
    hostname: {
      type: String,
      default: "",
    },
    filePath: {
      type: String,
      default: "",
    },
  }, {
    _id: false,
    id: false,
  });

  const CronConfigSourceDefault = {
    protocol: "",
    username: "",
    hostname: "",
    filePath: "",
  };

  const CronConfigAuth = createSchema(Schema, {
    password: {
      type: EncryptedData,
      default: null,
    },
    sshPrivateKey: {
      type: EncryptedData,
      default: null,
    },
    // Possibly unused
    sshPublicKey: {
      type: EncryptedData,
      default: null,
    },
    useSSHKey: {
      type: Boolean,
      default: false,
    },
  }, {
    _id: false,
    id: false,
  });

  const CronConfigAuthDefault = {
    password: null,
    sshPrivateKey: null,
    sshPublicKey: null,
    useSSHKey: false,
  };

  const AgencyCronConfig = createSchema(Schema, {
    enabled: {
      type: Boolean,
      default: false,
    },
    // sftp://user@host:port/path/to/file.xml
    source: {
      type: CronConfigSource,
      default: CronConfigSourceDefault,
    },
    // password OR SSH private key (with flag useSSHKey = true)
    auth: {
      type: CronConfigAuth,
      default: CronConfigAuthDefault,
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
    
    timezone: {
      type: String,
      default: ""
    },
    customApiPath: {
      type: String,
      default: "",
    },
    alterChunkSize: {
      type: Boolean,
      default: false,
    },
  }, {
    _id: false,
    id: false,
  });

  return AgencyCronConfig;
}