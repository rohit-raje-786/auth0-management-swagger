'use strict';

var utils = require('../utils/writer.js');
var Tickets = require('../service/TicketsService');

module.exports.apiV2TicketsEmail_verificationPOST = function apiV2TicketsEmail_verificationPOST (req, res, next, body, authorization, contentType) {
  Tickets.apiV2TicketsEmail_verificationPOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2TicketsPassword_changePOST = function apiV2TicketsPassword_changePOST (req, res, next, body, authorization, contentType) {
  Tickets.apiV2TicketsPassword_changePOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
