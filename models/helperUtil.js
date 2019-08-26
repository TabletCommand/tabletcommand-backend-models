"use strict";

function retrieveCurrentUnixTime() {
  return Date.now() / 1000;
}

module.exports = {
  retrieveCurrentUnixTime: retrieveCurrentUnixTime
};
