'use strict';


/**
 * Get all clients
 * Retrieves a list of all client applications. Accepts a list of fields to include or exclude.<br/><strong>Important:</strong> The <code>client_secret</code> and <code>encryption_key</code> attributes can only be retrieved with the <code>read:client_keys</code> scope.
 *
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2ClientsGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a client
 * Deletes a client and all its related assets (like rules, connections, etc) given its id.
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2ClientsIdDELETE = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a client
 * Retrieves a client by its id.<br/><strong>Important:</strong> The <code>client_secret</code>,<code>encryption_key</code> and <code>signing_keys</code> attributes can only be retrieved with the <code>read:client_keys</code> scope.
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2ClientsIdGET = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a client
 * <strong>Important:</strong> The <code>client_secret</code> and <code>encryption_key</code> attributes can only be updated with the <code>update:client_keys</code> scope.
 *
 * body String  (optional)
 * id String 
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2ClientsIdPATCH = function(body,id,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a client
 * Creates a new client application. The samples on the right show every attribute that can be used.
 *
 * body String  (optional)
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2ClientsPOST = function(body,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

