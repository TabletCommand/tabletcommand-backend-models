/* jslint node: true */
"use strict";

var _ = require('lodash');
var assert = require('chai').assert;

var mongoose = require('mongoose');

var models = require('../index');

describe('models', function(){
  it('are wired', function(done){

    // These should match index.js
    assert.isFunction(models.User);
    assert.isFunction(models.CadStatus);
    assert.isFunction(models.CadStatusMap);
    assert.isFunction(models.CadVehicle);
    assert.isFunction(models.CadVehicleStatus);
    assert.isFunction(models.Department);
    assert.isFunction(models.Session);
    assert.isFunction(models.User);

    return done();
  });
});
