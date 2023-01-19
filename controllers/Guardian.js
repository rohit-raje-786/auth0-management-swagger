'use strict';

var utils = require('../utils/writer.js');
var Guardian = require('../service/GuardianService');

module.exports.apiV2GuardianEnrollmentsIdDELETE = function apiV2GuardianEnrollmentsIdDELETE (req, res, next, id, authorization) {
  Guardian.apiV2GuardianEnrollmentsIdDELETE(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2GuardianEnrollmentsIdGET = function apiV2GuardianEnrollmentsIdGET (req, res, next, id, authorization) {
  Guardian.apiV2GuardianEnrollmentsIdGET(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2GuardianFactorsFactor_nameProvidersNameGET = function apiV2GuardianFactorsFactor_nameProvidersNameGET (req, res, next, factor_name, name, authorization) {
  Guardian.apiV2GuardianFactorsFactor_nameProvidersNameGET(factor_name, name, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2GuardianFactorsGET = function apiV2GuardianFactorsGET (req, res, next, authorization) {
  Guardian.apiV2GuardianFactorsGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2GuardianFactorsNamePUT = function apiV2GuardianFactorsNamePUT (req, res, next, body, name, authorization, contentType) {
  Guardian.apiV2GuardianFactorsNamePUT(body, name, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2GuardianFactorsSmsProvidersTwilioPUT = function apiV2GuardianFactorsSmsProvidersTwilioPUT (req, res, next, body, authorization, contentType) {
  Guardian.apiV2GuardianFactorsSmsProvidersTwilioPUT(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2GuardianFactorsSmsTemplatesGET = function apiV2GuardianFactorsSmsTemplatesGET (req, res, next, authorization) {
  Guardian.apiV2GuardianFactorsSmsTemplatesGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2GuardianFactorsSmsTemplatesPUT = function apiV2GuardianFactorsSmsTemplatesPUT (req, res, next, body, authorization, contentType) {
  Guardian.apiV2GuardianFactorsSmsTemplatesPUT(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
