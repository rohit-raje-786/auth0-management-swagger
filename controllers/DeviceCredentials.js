'use strict';

var utils = require('../utils/writer.js');
var DeviceCredentials = require('../service/DeviceCredentialsService');

module.exports.apiV2Device_credentialsGET = function apiV2Device_credentialsGET (req, res, next, authorization) {
  DeviceCredentials.apiV2Device_credentialsGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2Device_credentialsIdDELETE = function apiV2Device_credentialsIdDELETE (req, res, next, id, authorization) {
  DeviceCredentials.apiV2Device_credentialsIdDELETE(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2Device_credentialsPOST = function apiV2Device_credentialsPOST (req, res, next, body, authorization, contentType) {
  DeviceCredentials.apiV2Device_credentialsPOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
