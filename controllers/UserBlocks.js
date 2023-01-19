'use strict';

var utils = require('../utils/writer.js');
var UserBlocks = require('../service/UserBlocksService');

module.exports.apiV2User_blocksDELETE = function apiV2User_blocksDELETE (req, res, next, authorization) {
  UserBlocks.apiV2User_blocksDELETE(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2User_blocksGET = function apiV2User_blocksGET (req, res, next, authorization) {
  UserBlocks.apiV2User_blocksGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2User_blocksIdDELETE = function apiV2User_blocksIdDELETE (req, res, next, id, authorization) {
  UserBlocks.apiV2User_blocksIdDELETE(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2User_blocksIdGET = function apiV2User_blocksIdGET (req, res, next, id, authorization) {
  UserBlocks.apiV2User_blocksIdGET(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
