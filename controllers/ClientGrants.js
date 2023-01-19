'use strict';

var utils = require('../utils/writer.js');
var ClientGrants = require('../service/ClientGrantsService');

module.exports.apiV2Client_grantsGET = function apiV2Client_grantsGET (req, res, next, authorization) {
  ClientGrants.apiV2Client_grantsGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2Client_grantsIdDELETE = function apiV2Client_grantsIdDELETE (req, res, next, id, authorization) {
  ClientGrants.apiV2Client_grantsIdDELETE(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2Client_grantsIdPATCH = function apiV2Client_grantsIdPATCH (req, res, next, body, id, authorization, contentType) {
  ClientGrants.apiV2Client_grantsIdPATCH(body, id, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2Client_grantsPOST = function apiV2Client_grantsPOST (req, res, next, body, authorization, contentType) {
  ClientGrants.apiV2Client_grantsPOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
