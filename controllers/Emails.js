'use strict';

var utils = require('../utils/writer.js');
var Emails = require('../service/EmailsService');

module.exports.apiV2EmailsProviderDELETE = function apiV2EmailsProviderDELETE (req, res, next, authorization) {
  Emails.apiV2EmailsProviderDELETE(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2EmailsProviderGET = function apiV2EmailsProviderGET (req, res, next, authorization) {
  Emails.apiV2EmailsProviderGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2EmailsProviderPATCH = function apiV2EmailsProviderPATCH (req, res, next, body, authorization, contentType) {
  Emails.apiV2EmailsProviderPATCH(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2EmailsProviderPOST = function apiV2EmailsProviderPOST (req, res, next, body, authorization, contentType) {
  Emails.apiV2EmailsProviderPOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
