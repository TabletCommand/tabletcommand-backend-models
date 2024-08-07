import {
  MongooseModule,
} from "../../helpers";
import { EncryptedDataType, CronConfigSourceType, CronConfigAuthType, CronConfigCSVFieldMapType, ReconcileTimeOptionsType, AgencyCronConfigType } from "../../types/agency";

export default function AgencyCronSchema(mongoose: MongooseModule) {
  const { Schema } = mongoose;

  const EncryptedData = new Schema<EncryptedDataType>({
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

  const CronConfigSource = new Schema<CronConfigSourceType>({
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

  const CronConfigAuth = new Schema<CronConfigAuthType>({
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

  const CronConfigCSVFieldMap = new Schema<CronConfigCSVFieldMapType>({
    PersonnelID: {
      type: String,
    },
    PersonnelName: {
      type: String,
    },
    PersonnelRank: {
      type: String,
    },
    PersonnelWorkCode: {
      type: String,
    },
    PersonnelNote: {
      type: String,
    },
    StartTime: {
      type: String,
    },
    EndTime: {
      type: String,
    },
    UnitName: {
      type: String,
    },
    TimeFormat: {
      type: String,
    },
  }, {
    _id: false,
    id: false,
  });

  const CronConfigCSVFieldMapDefault = {
    PersonnelID: "ID",
    PersonnelName: "Name",
    PersonnelRank: "Position",
    PersonnelWorkCode: "WorkCode",
    PersonnelNote: "Note",

    // Convert these to expected format
    StartTime: "StartTime",
    EndTime: "EndTime",
    UnitName: "UnitName",
    TimeFormat: "YYYY-MM-DD HH:mm",
  };

  const ReconcileTimeOptions = new Schema<ReconcileTimeOptionsType>({
    enabled: {
      type: Boolean,
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    }
  }, {
    _id: false,
    id: false,
  });

  const ReconcileTimeOptionsDefault = {
    enabled: false,
    startTime: "07:00",
    endTime: "08:00",
  };

  const AgencyCronConfig = new Schema<AgencyCronConfigType>({
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
    reconcileEnabled: {
      type: Boolean,
      default: true
    },
    reconcileTimeOptions: {
      type: ReconcileTimeOptions,
      default: ReconcileTimeOptionsDefault,
    },
    hasLabelCustomization: {
      type: Boolean,
      default: false,
    },
    assignmentOverride: {
      type: Boolean,
      default: false,
    },
    useAlternateId: {
      type: Boolean,
      default: false,
    },
    strictAgencyCodeMatch: {
      type: Boolean,
      default: false,
    },
    csvFieldMap: {
      type: CronConfigCSVFieldMap,
      default: CronConfigCSVFieldMapDefault,
    },
  }, {
    _id: false,
    id: false,
  });

  return AgencyCronConfig;
}