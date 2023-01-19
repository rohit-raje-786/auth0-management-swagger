'use strict';

var utils = require('../utils/writer.js');
var Jobs = require('../service/JobsService');

module.exports.apiV2JobsIdErrorsGET = function apiV2JobsIdErrorsGET (req, res, next, id, authorization) {
  Jobs.apiV2JobsIdErrorsGET(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2JobsIdGET = function apiV2JobsIdGET (req, res, next, id, authorization) {
  Jobs.apiV2JobsIdGET(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2JobsUsers_importsPOST = function apiV2JobsUsers_importsPOST (req, res, next, body, authorization, contentType) {
  Jobs.apiV2JobsUsers_importsPOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2JobsVerification_emailPOST = function apiV2JobsVerification_emailPOST (req, res, next, body, authorization, contentType) {
  Jobs.apiV2JobsVerification_emailPOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
