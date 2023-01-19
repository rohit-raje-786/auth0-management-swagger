'use strict';

var utils = require('../utils/writer.js');
var Rules = require('../service/RulesService');

module.exports.apiV2RulesGET = function apiV2RulesGET (req, res, next, authorization) {
  Rules.apiV2RulesGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2RulesIdDELETE = function apiV2RulesIdDELETE (req, res, next, id, authorization) {
  Rules.apiV2RulesIdDELETE(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2RulesIdGET = function apiV2RulesIdGET (req, res, next, id, authorization) {
  Rules.apiV2RulesIdGET(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2RulesIdPATCH = function apiV2RulesIdPATCH (req, res, next, body, id, authorization, contentType) {
  Rules.apiV2RulesIdPATCH(body, id, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2RulesPOST = function apiV2RulesPOST (req, res, next, body, authorization, contentType) {
  Rules.apiV2RulesPOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
