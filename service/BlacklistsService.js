'use strict';


/**
 * Get all blacklisted tokens
 * Retrieves the <code>jti</code> and <code>aud</code> of all tokens in the blacklist.
 *
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2BlacklistsTokensGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Blacklist a token
 * Adds the token identified by the <code>jti</code> to a blacklist for the tenant.
 *
 * body String  (optional)
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2BlacklistsTokensPOST = function(body,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

