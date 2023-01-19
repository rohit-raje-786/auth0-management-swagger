'use strict';

var utils = require('../utils/writer.js');
var UsersByEmail = require('../service/UsersByEmailService');

module.exports.apiV2Users_by_emailGET = function apiV2Users_by_emailGET (req, res, next, authorization, email) {
  UsersByEmail.apiV2Users_by_emailGET(authorization, email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
