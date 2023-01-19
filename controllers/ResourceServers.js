'use strict';

var utils = require('../utils/writer.js');
var ResourceServers = require('../service/ResourceServersService');

module.exports.apiV2Resource_serversIdDELETE = function apiV2Resource_serversIdDELETE (req, res, next, id, authorization) {
  ResourceServers.apiV2Resource_serversIdDELETE(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2Resource_serversIdGET = function apiV2Resource_serversIdGET (req, res, next, id, authorization) {
  ResourceServers.apiV2Resource_serversIdGET(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2Resource_serversIdPATCH = function apiV2Resource_serversIdPATCH (req, res, next, body, id, authorization, contentType) {
  ResourceServers.apiV2Resource_serversIdPATCH(body, id, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2Resource_serversPOST = function apiV2Resource_serversPOST (req, res, next, body, authorization, contentType) {
  ResourceServers.apiV2Resource_serversPOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
