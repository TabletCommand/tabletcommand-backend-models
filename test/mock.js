module.exports = function(dependencies) {
  "use strict";

  const mockgoose = dependencies.mockgoose;
  const mongoose = dependencies.mongoose;
  // var models = dependencies.models;
  const redisClient = dependencies.redisClient;

  const actionLog = {
    departmentId: "d1234",
    email: "hello@example.com",
    action: "someAction",
    object: {
      vehicleId: "v1171",
      radioName: "E10"
    }
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
    incidentNumber: "INC19991"
  };

  const department = {
    _id: mongoose.Types.ObjectId(),
    department: "Test Department",
    city: "San Francisco",
    active: true,
    apikey: "abcd",
    rtsEnabled: true,
    rtsChannelPrefix: "CH_TEST",
    rtsAuthKey: "CH_AUTH_KEY",
    agency: [
      "A", "B", "C"
    ],
    signupKey: "A1B2",
    incidentTypes: [{
      name: "Type",
      value: "type"
    }]
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
    note: "don't feed after dark"
  };

  const incidentEvent = {
    IncidentNumber: "TC1212121",
    departmentId: "d123",
    modified_unix_date: 1432230780,
    checksum: "abcd",
    events: [{
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
    }]
  };

  const incidentTakeover = {
    _id: mongoose.Types.ObjectId(),
    incident_id: "i1234",
    incident_name: "Test Incident",
    departmentId: "d123",
    old_owner: "user1",
    new_owner: "user2",
    owner: "",
    status: "request",
    request_time: 1442888560
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
    location: {
      longitude: -122.304804409037,
      latitude: 37.5419679656974
    },
    session: "abcd"
  };

  const rateLimit = {
    _id: mongoose.Types.ObjectId(),
    username: "test123",
    modified_unix_date: 1426983552.49945,
    count: 8
  };

  const user = {
    _id: mongoose.Types.ObjectId(),
    nick: "Test",
    email: "test@save.me",
    mapId: "TEST",
    departmentId: "d123",
    isPro: true,
    agency: "ZMM"
  };

  const userRegistration = {
    email: "test@email.com",
    name: "John Waters",
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

  function prepareTestData(callback) {
    return callback(null);
  }

  function beforeEach(callback) {
    return mockgoose.prepareStorage().then(function() {
      return mongoose.connect("mongodb://127.0.0.1:27017/TestingDB", {
        useMongoClient: true // this option silents the warning, but does not cleanup the data
      }, function(err) {
        if (err) {
          return callback(err);
        }
        return prepareTestData(function(err) {
          if (err) {
            console.log("err prepareTestData", err);
          }
          return callback(err);
        });
      });
    });
  }

  function afterEach(callback) {
    mockgoose.helper.reset().then(function() {
      redisClient.flushall(function() {
        return callback();
      });
    });
  }

  return {
    prepareTestData,
    beforeEach,
    afterEach,

    actionLog,
    cadVehicleStatus,
    department,
    deviceMapping,
    incidentEvent,
    incidentTakeover,
    location,
    rateLimit,
    user,
    userRegistration
  };
};
