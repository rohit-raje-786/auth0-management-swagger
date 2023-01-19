'use strict';

var utils = require('../utils/writer.js');
var Blacklists = require('../service/BlacklistsService');

module.exports.apiV2BlacklistsTokensGET = function apiV2BlacklistsTokensGET (req, res, next, authorization) {
  Blacklists.apiV2BlacklistsTokensGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2BlacklistsTokensPOST = function apiV2BlacklistsTokensPOST (req, res, next, body, authorization, contentType) {
  Blacklists.apiV2BlacklistsTokensPOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
