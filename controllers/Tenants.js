'use strict';

var utils = require('../utils/writer.js');
var Tenants = require('../service/TenantsService');

module.exports.apiV2TenantsSettingsGET = function apiV2TenantsSettingsGET (req, res, next, authorization) {
  Tenants.apiV2TenantsSettingsGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2TenantsSettingsPATCH = function apiV2TenantsSettingsPATCH (req, res, next, body, authorization, contentType) {
  Tenants.apiV2TenantsSettingsPATCH(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
