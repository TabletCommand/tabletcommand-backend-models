module.exports = function(dependencies) {
  "use strict";

  const mockgoose = dependencies.mockgoose;
  const mongoose = dependencies.mongoose;
  // var models = dependencies.models;
  const redisClient = dependencies.redisClient;

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
    remoteAddress: "1.2.3.4"
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
    }
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
    mockgoose.prepareStorage().then(function() {
      mongoose.connect("mongodb://127.0.0.1:27017/TestingDB", {
        useMongoClient: true // this option silents the warning, but does not cleanup the data
      }, function(err) {
        if (err) {
          return callback(err);
        }
        prepareTestData(function(err) {
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

    department,
    deviceMapping,
    incidentTakeover,
    location,
    user,
    userRegistration
  };
};
