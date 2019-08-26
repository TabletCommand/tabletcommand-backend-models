"use strict";

function currentUnixTime() {
  return Date.now() / 1000;
}

module.exports = {
  currentUnixTime: currentUnixTime
};
