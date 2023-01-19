'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.apiV2UsersGET = function apiV2UsersGET (req, res, next, authorization) {
  Users.apiV2UsersGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2UsersIdDELETE = function apiV2UsersIdDELETE (req, res, next, id, authorization) {
  Users.apiV2UsersIdDELETE(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2UsersIdEnrollmentsGET = function apiV2UsersIdEnrollmentsGET (req, res, next, id, authorization) {
  Users.apiV2UsersIdEnrollmentsGET(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2UsersIdGET = function apiV2UsersIdGET (req, res, next, id, authorization) {
  Users.apiV2UsersIdGET(id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2UsersIdIdentitiesPOST = function apiV2UsersIdIdentitiesPOST (req, res, next, body, id, authorization, contentType) {
  Users.apiV2UsersIdIdentitiesPOST(body, id, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2UsersIdIdentitiesProviderUser_idDELETE = function apiV2UsersIdIdentitiesProviderUser_idDELETE (req, res, next, id, provider, user_id, authorization) {
  Users.apiV2UsersIdIdentitiesProviderUser_idDELETE(id, provider, user_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2UsersIdMultifactorProviderDELETE = function apiV2UsersIdMultifactorProviderDELETE (req, res, next, id, provider, authorization) {
  Users.apiV2UsersIdMultifactorProviderDELETE(id, provider, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2UsersIdPATCH = function apiV2UsersIdPATCH (req, res, next, body, id, authorization, contentType) {
  Users.apiV2UsersIdPATCH(body, id, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2UsersIdRecovery_code_regenerationPOST = function apiV2UsersIdRecovery_code_regenerationPOST (req, res, next, body, id, authorization, contentType) {
  Users.apiV2UsersIdRecovery_code_regenerationPOST(body, id, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2UsersPOST = function apiV2UsersPOST (req, res, next, body, authorization, contentType) {
  Users.apiV2UsersPOST(body, authorization, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV2UsersUser_idLogsGET = function apiV2UsersUser_idLogsGET (req, res, next, user_id, authorization) {
  Users.apiV2UsersUser_idLogsGET(user_id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
