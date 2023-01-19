'use strict';

var utils = require('../utils/writer.js');
var Connections = require('../service/ConnectionsService');

module.exports.apiV2ConnectionsGET = function apiV2ConnectionsGET (req, res, next, authorization) {
  Connections.apiV2ConnectionsGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2ConnectionsIdDELETE = function apiV2ConnectionsIdDELETE (req, res, next, id, authorization) {
  Connections.apiV2ConnectionsIdDELETE(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2ConnectionsIdGET = function apiV2ConnectionsIdGET (req, res, next, id, authorization) {
  Connections.apiV2ConnectionsIdGET(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2ConnectionsIdPATCH = function apiV2ConnectionsIdPATCH (req, res, next, body, id, authorization, contentType) {
  Connections.apiV2ConnectionsIdPATCH(body, id, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2ConnectionsIdUsersDELETE = function apiV2ConnectionsIdUsersDELETE (req, res, next, id, authorization) {
  Connections.apiV2ConnectionsIdUsersDELETE(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2ConnectionsPOST = function apiV2ConnectionsPOST (req, res, next, body, authorization, contentType) {
  Connections.apiV2ConnectionsPOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
