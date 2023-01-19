'use strict';

var utils = require('../utils/writer.js');
var Clients = require('../service/ClientsService');

module.exports.apiV2ClientsGET = function apiV2ClientsGET (req, res, next, authorization) {
  Clients.apiV2ClientsGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2ClientsIdDELETE = function apiV2ClientsIdDELETE (req, res, next, id, authorization) {
  Clients.apiV2ClientsIdDELETE(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2ClientsIdGET = function apiV2ClientsIdGET (req, res, next, id, authorization) {
  Clients.apiV2ClientsIdGET(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2ClientsIdPATCH = function apiV2ClientsIdPATCH (req, res, next, body, id, authorization, contentType) {
  Clients.apiV2ClientsIdPATCH(body, id, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2ClientsPOST = function apiV2ClientsPOST (req, res, next, body, authorization, contentType) {
  Clients.apiV2ClientsPOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
