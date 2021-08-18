module.exports = function(dependencies) {
  "use strict";

  const uuid = require("uuid");
  const config = require("./config");
  config.checkIfTestDatabase();

  const {
    models,
    mongoose
  } = dependencies;

  const actionLog = {
    departmentId: "d1234",
    email: "hello@example.com",
    action: "someAction",
    userId: "1234",
    object: {
      vehicleId: "v1171",
      radioName: "E10"
    },
    before: {
      test: "test1"
    },
    after: {
      test: "test2"
    },
    delta: {
      test: "test2"
    }
  };

  const agency = {
    _id: mongoose.Types.ObjectId(),
    departmentId: new mongoose.Types.ObjectId("56131f724143487a10000001"),
    code: "TC",
    name: "Tablet Command",
    active: true,
    administrators: [
      new mongoose.Types.ObjectId()
    ],
    personnelIntegration: true,
    personnelMonitorHours: 24,
    crossStaffing: [
      {
        radioName: "E1",
        crossStaffedUnits: ["E2", "E3"],
        alwaysCrossStaff: true
      }
    ]
  };

  const arcGISGroup = {
    access: "private",
    resolvedDepartments: [
      {
        department: "Demo RTS Fire Department",
        departmentId: "558365a198b2fa4278000053",
        authUsername: "tabletcmd",
        authError: null,
        tokenUsername: "tc_ContraCostaCountyFire",
        tokenError: null,
        users: [
          //
          {
            username: "tc_someone",
            email: "hello@tc.com",
            userId: "558365a198a2aa42780000aa",
          }
        ]
      }
    ],
    externalOrgIds: [
      "MyTOuXKXZoizaaa"
    ],
    groupId: "c5d013e197244577a583c49984d319d9",
    outsiders: [
      {
        fullName: "Michael Kallum",
        memberType: "member",
        orgId: "MyTOuXKXZoizaaa",
        username: "Michael_Kallum"
      }
    ],
    owner: "jane_tabletcommand",
    protected: true,
    title: "TC - City of Fire Department",
    users: [
      {
        fullName: "Jane Serrano",
        memberType: "admin",
        orgId: "zGXMcUaDlMGoAAAg",
        username: "jane_tabletcommand"
      },
    ]
  };

  const assignment = {
    position: 1,
    active: true,
    name: "Vertical Test",
    userId: "1234",
    departmentId: "4321",
    description: "testing",
    isMandatory: false,
  };

  const battalionUnit = {
    name: "BattalionUnit Test",
    friendly_id: "B1",
    local_id: 321,
    personnel: 4,
    position: 1,
    active: true,
    isMandatory: false,
    departmentId: "123",
    userId: "123",
    api_battalion_id: "123",
    battalion_uuid: "",
    battalion_name: "",
  };

  const battalion = {
    name: "Battalion Test",
    active: true,
    isMandatory: false,
    userId: "123",
    departmentId: 123,
    AgencyId: new mongoose.Types.ObjectId(agency._id),
    position: 1,
    units: [battalionUnit]
  };

  const checklistId = mongoose.Types.ObjectId();
  const checklistUUID = "150cf1ca-ffbb-42c9-bd4c-fd64be45d888";

  const checklistItem = {
    _id: mongoose.Types.ObjectId(),
    uuid: "150cf1ca-ffbb-42c9-bd4c-fd64be45d887",
    checklist_uuid: checklistUUID,
    position: 1,
    active: true,
    name: "TC Test Item",
    checked: 0,
    api_checklist_id: checklistId,
    userId: "1234",
    departmentId: "4321",
    local_id: 1,
    isMandatory: true,
    agencyId: new mongoose.Types.ObjectId(agency._id),
    description: "Testing Description"
  };

  const checklist = {
    _id: checklistId,
    uuid: checklistUUID,
    position: 1,
    active: true,
    name: "TC Test",
    userId: "1234",
    departmentId: "4321",
    local_id: 1,
    isMandatory: true,
    agencyId: new mongoose.Types.ObjectId(agency._id),
    items: [checklistItem]
  };

  const mailLog = {
    mailId: "1234",
    event: "delivery",
    timestamp: 1553199671,
    recipient: "test@tabletcommand.com",
    recipientDomain: "tabletcommand.com",
    tags: ["create account"],
    deliveryStatus: {},
    message: {},
    flags: {},
    envelope: {},
    logLevel: "info",
    reason: "Message Sent",
    severity: "Mild"
  };

  const message = {
    departmentId: "d1234",
    "active" : false,
    "title" : "Upgrade App",
    "body" : "Application out of date.",
    "actionTitle" : "Upgrade App",
    "color" : null,
    "url" : "",
    "priority" : 4,
    "type" : {
        "type" : "upgradeApp",
        "typeOpts" : {
            "major" : 3,
            "minor" : 0,
            "patch" : 1
        }
    },
    "created" : new Date().toISOString(),
    "uuid" : "138acffd-a94f-402d-87b3-ff6ed31a19dc",
    "requestId" : "138acffd-a94f-402d-87b3-ff6ed31a19db",
  };

  const cadIncident = {
    _id: mongoose.Types.ObjectId(),
    uuid: "150cf1ca-ffbb-42c9-bd4c-fd64be45d679",
    departmentId: "56131f724143487a10000001",
    AgencyID: "BDC",
    IncidentNumber: "19-058314",
    TransactionID: "15532010710000",
    AgencyIncidentCallTypeDescription: "AT - Ambulance Transport",
    StreetName: "College",
    StreetSuffix: "Court",
    Predirectional: "North",
    Postdirectional: "Late",
    CityOrLocality: "San Francisco",
    Floor: "2",
    Suite: "AA",
    City: "San Francisco",
    Building: "E",
    StateOrProvince: "CA",
    CommonPlaceName: "VALLEY VIEW MEDICAL CENTER",
    LocationComment: "VALLEY VIEW MEDICAL CENTER",
    CrossStreet1: "FIVE MILE RD",
    CrossStreet2: "No X-Street",
    cross_streets: "FIVE MILE RD/No X-Street",
    PostalCode: "29191",
    CallerNumber: "0192-122-299",
    PriorIncidentChanged: true,
    PriorIncident: [
      //
      {
        IncidentNumber: "19-042678",
        IncidentDateTime: "2019-03-01T01:56:54-08:00",
        Problem: "Problem Abcd",
        Address: "5330 Us 95 Hwy S",
        Suite: "83",
        Jurisdiction: "San Bernardino County",
        Comment: [
          //
          {
            Comment: "[1] Call Appended to Incident number 19-042593",
            CommentSource: "G8724",
            CommentDateTime: "2019-03-01T01:59:57-08:00"
          }
        ]
      }
    ],
    Latitude: "34.788611",
    Longitude: "-114.549444",
    Comment: [
      //
      {
        Comment: "(1) VALLEY VIEW ICU TO SUNRISE ICU",
        CommentSource: "H6577",
        CommentDateTime: "2019-03-21T13:21:08-07:00"
      }
    ],
    units: [
      //
      {
        UnitDispatchNumber: 4067677,
        UnitID: "MA31",
        TimeDispatched: "2019-03-21T13:21:22-07:00"
      }
    ],
    preference_location: "address",
    EntryDateTime: "2019-03-21T13:21:11-07:00",
    ClosedDateTime: "",
    closed_unix_date: 0,
    start_unix_date: 1553199671,
    modified_unix_date: 1553201071.636
  };

  const cadStatus = {
    _id: mongoose.Types.ObjectId(),
    code: "AV",
    codeDisplay: "RS",
    color: {
      background: "#7b7d7d",
      text: "#F8F9F9"
    },
    departmentId: "51a2529293e11b3569000057",
    modifiedDate: 1544771122.997,
    name: "In Service",
    normalized: "inService",
    options: [
      //
      {
        cadKey: "oosCode",
        cadValues: [
          //
          {
            favorite: false,
            name: "ADM - Admin",
            position: 20,
            type: "string",
            value: "ADM",
            visible: true
          }
        ],
        name: "oosCode",
        position: 2,
        visible: true
      }
    ],
    roaming: false,
    selfAssignable: true,
    status: "OR",
    statusId: 1,
    uuid: "8086956b-43af-4300-aa30-5efbd10b2c98"
  };

  const cadStatusMap = {
    "departmentId": "51a2529293e11b3569000057",
    "fromStatusId": 0,
    "modifiedDate": 1544143059.729,
    "toStatusIds": [
      //
      {
        "statusId": 1,
        "userEnabled": true
      }
    ]
  };

  const cadVehicle = {
    _id: mongoose.Types.ObjectId(),
    uuid: "30f8d7c7-20a3-4a12-b911-a424f5037003",
    radioName: "T01",
    vehicleId: "7705",
    modifiedDate: 1541569088.909,
    departmentId: "5195426cc4e016a988000965",
    station: {
      code: "S01",
      name: "Station 01"
    },
    capability: ""
  };

  const cadVehicleStatus = {
    uuid: "5a324923-2622-48f2-abaa-8a855e7cebdf",
    departmentId: "d1234",
    vehicleId: "v1171",
    radioName: "E10",
    requestTime: 1516557000,
    responseTime: 1516567096,
    status: "Dispatched",
    statusCode: "DISP",
    modifiedDate: 1516577096,
    requestStatus: 0,
    incidentNumber: "INC19991",
    capability: ""
  };

  const cadVehicleStatusHistory = {
    departmentId: "d1234",
    vehicleId: "v1171",
    radioName: "E10",
    status: "Dispatched",
    statusCode: "DISP",
    requestedAt: 1516557000,
    requestedBy: "user",
    modifiedDate: 1516577096,
    incidentNumber: "INC19991"
  };

  const department = {
    _id: mongoose.Types.ObjectId(),
    department: "Test Department",
    city: "San Francisco",
    active: true,
    apikey: "abcd",
    partialApiKey: "ab",
    personnelStaffingEnabled: true,
    rtsEnabled: true,
    rtsChannelPrefix: "CH_TEST",
    rtsAuthKey: "CH_AUTH_KEY",
    agencyIds: [
      new mongoose.Types.ObjectId(agency._id)
    ],
    signupKey: "A1B2",
    incidentTypes: [{
      name: "Type",
      value: "type"
    }],
    shareLocationPhones: false,
    shareLocationTablets: true,
    cadOneWayVehiclesEnabled: false,
    mowsEnabled: true,
    shareAVL: {
      enabled: true,
      opAreaCode: "DAL",
      opAreaName: "Delta Operations"
    },
    accountType: "production",
    timeZone: "America/Los_Angeles",
    firstArrivingEnabled: true,
    simpleSenseEnabled: true,
    licensing: {
      tcPro2Way: 0,
      tcPro1Way: 0,
      tcMobile: 0,
      tcWeb: 0,
      fireMapperPro: 0
    }
  };

  const esriMap = {
    mapLayers: [
      //
      {
        "url": "https://services.arcgis.com/aA3snZwJfFkVyDuP/arcgis/rest/services/XBO_Branches_Updated/FeatureServer/0",
        "itemId": "XBO_Branches_Updated_3067",
        "layerType": "ArcGISFeatureLayer",
        "title": "XBO Branches_Updated"
      },
      {
        "itemId": "city_limits_092019_4185",
        "layerType": "ArcGISFeatureLayer",
        "title": "City Limits",
        "url": "https://services.arcgis.com/aA3snZwJfFkVyDuP/arcgis/rest/services/city_limits_092019/FeatureServer/0"
      },
      {
        "itemId": "unvdpdod57lext9eck9nxipcov2dgjqs_8576",
        "layerType": "ArcGISFeatureLayer",
        "title": "Tablet Command",
        "url": "https://api.tabletcommand.com/esri/tc-file/unvdpdod57lext9eck9nxipcov2dgjqs/FeatureServer/0"
      }
    ],
    "owner": "john_tabletcommand",
    "title": "Location (MM Filters)",
    "url": null,
    "access": "shared",
    "baseMap": {
      "baseMapLayers": [
        //
        {
          "opacity": 1,
          "id": "VectorTile_1188",
          "type": "VectorTileLayer",
          "layerType": "VectorTileLayer",
          "title": "World Street Map (Night)",
          "styleUrl": "https://cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",
          "visibility": true
        }
      ],
      "title": "Streets (Night)"
    },
    "itemId": "01cebf7aede94ed3a9f4c260e18a7d7e",
    "type": "Web Map",
    "tags": [
      "XBO",
      "Tabletcommand"
    ],
    "development": true,
  };

  const deviceMapping = {
    _id: mongoose.Types.ObjectId(),
    nick: "Test",
    departmentId: "d123",
    deviceType: "hello",
    mapId: "map123",
    deviceId: "deviceType121",
    modified_unix_date: 1432230780,
    active: false,
    remoteAddress: "1.2.3.4",
    note: "don't feed after dark",
    mapHidden: false
  };

  const esri = {
    _id: mongoose.Types.ObjectId(),
    departmentId: new mongoose.Types.ObjectId("56131f724143487a10000001"),
    modified_unix_date: 1432230780,
    token: {
      access_token: "abc_PccBHQYuj",
      expires_in: 2800,
      username: "hello_tc",
      ssl: true,
      refresh_token: "def_IZ99D6eS"
    },
    tokenDateExpiry: 1544475888,
    tokenError: {
      code: 498,
      error: "invalid_request",
      error_description: "refresh_token expired",
      message: "refresh_token expired"
    },
    auth: {
      username: "fire_maps",
      encrypted: {
        iv: "18f17",
        encryptedData: "dee54"
      }
    },
    fireMapperAuth: {
      username: "fire_mapper",
      encrypted: {
        iv: "28f10",
        encryptedData: "dee99"
      },
      encryptedAccessCode: {
        iv: "99f1341",
        encryptedData: "zoom123"
      }
    },
    maps: [
      esriMap
    ],
    mapsProperties: [
      //
      {
        itemId: "01cebf7aede94ed3a9f4c260e18a7d7e",
        download: true,
      }
    ]
  };

  const gstMapping = {
    _id: mongoose.Types.ObjectId(),
    departmentId: "d123",
    unitId: "E123",
    modified_unix_date: 1432230780,
    active: false,
    remoteAddress: "1.2.3.4",
    note: "don't feed after dark",
    mapHidden: false,
    gstAgency: "LAX",
    deviceType: "gst",
    note: ""
  };

  const incidentEvent = {
    IncidentNumber: "TC1212121",
    departmentId: "d123",
    modified_unix_date: 1432230780,
    message: "Hello from the other side",
    location: {
      longitude: -29.90129,
      latitude: 121.223131
    },
    userTime: 1437121647,
    type: "contribution",
    user: {
      email: "marius+cc@tabletcommand.com",
      username: "ztc-marcc",
      radioName: "E12",
      userId: "51c2dcca0c599704e400001f"
    },
    uuid: "ABCDEF"
  };

  const incidentTakeover = {
    _id: mongoose.Types.ObjectId(),
    incident_id: "i1234",
    incident_name: "Test Incident",
    incident_number: "TC-12345",
    departmentId: "d123",
    old_owner: "user1",
    new_owner: "user2",
    owner: "",
    status: "request",
    request_time: 1442888560
  };

  const incidentNotified = {
    _id: mongoose.Types.ObjectId(),
    departmentId: "d123",
    IncidentNumber: "T-1536603902",
    incidentTypes: [
      "any"
    ],
    units: [
      "E31"
    ],
    date: 1536603902.196
  };

  const location = {
    _id: mongoose.Types.ObjectId(),
    departmentId: "d123",
    userId: "542a40db20783c000000153d",
    uuid: "92c8f732-52b7-46cc-855a-d54fddfe3172",
    username: "E23",
    modified_unix_date: 1426983552.49945,
    device_type: "iPad",
    active: true,
    heading: 43,
    location: {
      longitude: -122.304,
      latitude: 37.541
    },
    locationGeoJSON: {
      type: "Point",
      coordinates: [-122.304, 37.541],
    },
    session: "abcd",
    opAreaCode: "DAL",
    opAreaName: "Delta Operations",
    shared: true,
    state: "CA",
    sendToCAD: false
  };

  const managedIncident = {
    _id: mongoose.Types.ObjectId(),
    CallerNumber: "(720) 275-6765",
    CommandChannel: "ACPRI",
    TacticalAltChannel: "ACOPSB",
    TacticalChannel: "ACOPSA",
    active: 1,
    address: "Interstate 76 Eb / Federal To I 76 Eb, UNINCORPORATED ADAMS COUNTY CO",
    api_incident_number: "ACFR040719-0002506",
    channel: "ADAMSCOUNTYFIRERESCUEN1C-MANAGED-ACFR040719-0002506",
    channel_owner: "e12@acfpd.org",
    departmentId: "5b17f315f877ee16f3d019b7",
    end_time: "2019-04-08T00:16:30+0000",
    end_unix_time: 1554682590.44313,
    esri_map: {
      json: "YnBsaXN0MDDUAQIDBAUGCAlYJHZlcnNpb25YJG9iamVjdHNZJGFyY2hpdmVyVCR0b3ASAAGGoKEHVSRudWxsXxAPTlNLZXllZEFyY2hpdmVy0QoLVHJvb3SAAAgRGiMtMjc5P1FUWQAAAAAAAAEBAAAAAAAAAAwAAAAAAAAAAAAAAAAAAABb",
      map_type: "Generic",
      name: "Street",
      url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
      uuid: "00FCA57A-6F1B-4F74-84BD-E7A8B8BFF8FB"
    },
    history: [
      //
      {
        entity_id: 9207,
        entity_type: 14,
        message: "(43) 2a72 start medical (Shared)",
        time: 1554681941
      }
    ],
    is_closed: 1,
    location: "39.802526,-105.019773",
    managed: "1",
    modified_date: "2019-04-08T00:16:30.473", // Same as the modified_unix_date
    modified_unix_date: 1554682590.47396,
    name: "INJURED PARTY",
    preference_location: "location",
    slave_map_changed: false,
    source: "cad",
    start_time: "2019-04-08T00:05:41+0000",
    start_unix_time: 1554681941,
    units: [
      //
      {
        UnitID: "M12",
        active: 1,
        air_time: "",
        api_unit_dispatch_number: "5163322",
        checked: 0,
        column_position: 0,
        group_position: 0,
        incident_position: 0,
        isSupervisor: false,
        is_part_of_group: false,
        location_on_image: "",
        location_on_map: "",
        modified_date: "2019-04-08T00:16:30+0000",
        modified_unix_date: 1554682590.51667,
        note: "",
        personnelOnScene: 2,
        status: "Arrived",
        status_unix_date: 1554682217,
        time: "",
        warning: 0
      }
    ],
    userId: "5b3e78cc944e2a18d5222424",
    uuid: "579E2F47-7F63-4351-B41F-4A345D680B8F"
  };

  const monitor = {
    _id: mongoose.Types.ObjectId(),
    departmentId: "546ace2b3cd8d60d1d00256a",
    agencyId: "123",
    notificationType: "maps-token-error",
    status: "active",
    sentUnixDate: 1603263604
  };

  const rateLimit = {
    _id: mongoose.Types.ObjectId(),
    username: "test123",
    modified_unix_date: 1426983552.49945,
    count: 8
  };

  const session = {
    when: "2019-04-01T04:41:38.509Z",
    user: "51c2dcca0c599704e400001f",
    email: "marius+cc@tabletcommand.com",
    nick: "ztc-marcc",
    deviceId: "7evAKaFiOeaWTlsMTOSQMBKN",
    remoteAddress: "124.148.161.107",
    userAgent: "TCMobile/1.6 (iPhone; iOS 12.1; Scale/2.00)",
    why: "password",
    departmentId: "51a2529293e11b3569000057",
    source: "iphone.beta",
    token: uuid.v4(),
    active: false,
    ended: "2019-04-01T04:41:39.233Z"
  };

  const template = {
    position: 1,
    active: true,
    name: "Vertical Test",
    userId: "1234",
    departmentId: "4321",
    isMandatory: false,
    group: [],
    checklist: [],
    agencyId: new mongoose.Types.ObjectId(agency._id)
  };

  const user = {
    _id: mongoose.Types.ObjectId(),
    nick: "Test",
    email: "test@save.me",
    mapId: "TEST",
    departmentId: "d123",
    isPro: true,
    agencyId: new mongoose.Types.ObjectId(agency._id),
    managedAgencies: [new mongoose.Types.ObjectId(agency._id)],
    shareLocationPhone: false,
    shareLocationTablet: true,
    notificationSounds: [
      //
      {
        sound: "testSound.caf",
        soundType: "default",
      }
    ],
    offlineMapsEnabled: true,
  };

  const userRegistration = {
    email: "test@email.com",
    name: "John Waters",
    firstName: "John",
    lastName: "Waters",
    department: "New York City, NY",
    title: "Mr",
    modifiedDate: 1426983552.49945,
    status: "registered",
    stage: "afterEULA",
    presentedAt: 1488157071.042124,
    managedIncidentsCount: 1,
    checklistsCount: 2,
    firstIncidentUnixTime: 1443666043.380937,
    lastIncidentLocation: "40.999357,-85.767932",
    lastIncidentUnixTime: 1480525299.50968
  };

  const userDevice = {
    userId: "1234",
    departmentID: "4321",
    devices: [
      //
      {
        token: "de2687382a9df6a1165616aac",
        env: "testmock",
        ver: "TC Mobile v1.0 b23",
        ua: "TCMobile/1.0 (iPhone; iOS 10.1.1; Scale/3.00)",
        time: 1438627429.956,
        drift: 1438627429.956,
        bundleIdentifier: "com.testtesttest.TCMobile",
        silentEnabled: true,
        richEnabled: true,
        criticalAlertsEnabled: true,
        session: "1234321",
        active: true
      }
    ],
    notificationCount: 12,
    notificationUnits: ["M10", "B1"],
    notificationIncidentTypes: ["cliff-rescue", "test"],
    notificationSounds: {
      ios: {
        sound: "a.caf",
        soundType: "default",
        os: "ios"
      },
      android: {
        sound: "b.mp3",
        soundType: "default",
        os: "android"
      }
    },
    offDuty: true,
    criticalAlerts: true,
  };

  const personnelImport = {
    _id: mongoose.Types.ObjectId(),
    PersonnelID: "AM0111",
    PersonnelName: "Test User",
    PersonnelRank: "Eng",
    PersonnelWorkCode: "abcd1234",
    PersonnelNote: "A test user",
    departmentId: "123zzz",
    radioNames: ["M10", "Z1"],
    shiftStartTime: 1559446299,
    shiftStart: "2019-06-02T03:31:39.000Z",
    shiftEndTime: 1569446299,
    shiftEnd: "2019-09-25T21:18:19.000Z",
    modified_unix_date: 1570446299,
    modified: "2019-10-07T11:04:59.000Z",
    active: true,
    agencyCode: "TC",
    agencyName: "Tablet Command",
    importNotes: "test note"
  };

  const csvImport = {
    _id: mongoose.Types.ObjectId(),
    batchId: "AM0111",
    departmentId: "1234",
    agencyId: "abcd1234",
    importType: "users",
    fileType: "csv",
    fileName: "test file 123",
    fileSize: 800,
    records: [],
    userId: "4321",
    status: "success"
  };

  async function cleanup() {
    config.checkIfTestDatabase();

    await models.CADVehicleStatus.deleteMany({});
    await models.Esri.deleteMany({});
    await models.IncidentNotified.deleteMany({});
    await models.PersonnelImport.deleteMany({});
    await models.UserDevice.deleteMany({});
    await models.User.deleteMany({});
  }

  return {
    actionLog,
    agency,
    assignment,
    arcGISGroup,
    battalion,
    cadIncident,
    cadStatus,
    cadStatusMap,
    cadVehicle,
    cadVehicleStatus,
    cadVehicleStatusHistory,
    checklist,
    checklistItem,
    cleanup,
    department,
    deviceMapping,
    esri,
    gstMapping,
    incidentEvent,
    incidentNotified,
    incidentTakeover,
    location,
    mailLog,
    message,
    managedIncident,
    monitor,
    personnelImport,
    rateLimit,
    session,
    template,
    user,
    userDevice,
    userRegistration,
    csvImport
  };
};
