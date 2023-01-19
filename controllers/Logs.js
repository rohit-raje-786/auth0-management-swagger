'use strict';

var utils = require('../utils/writer.js');
var Logs = require('../service/LogsService');

module.exports.apiV2LogsGET = function apiV2LogsGET (req, res, next, authorization) {
  Logs.apiV2LogsGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2LogsIdGET = function apiV2LogsIdGET (req, res, next, id, authorization) {
  Logs.apiV2LogsIdGET(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
