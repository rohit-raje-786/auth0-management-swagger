'use strict';

var utils = require('../utils/writer.js');
var Stats = require('../service/StatsService');

module.exports.apiV2StatsActive_usersGET = function apiV2StatsActive_usersGET (req, res, next, authorization) {
  Stats.apiV2StatsActive_usersGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2StatsDailyGET = function apiV2StatsDailyGET (req, res, next, authorization) {
  Stats.apiV2StatsDailyGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
