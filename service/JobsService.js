'use strict';


/**
 * Get failed job error details
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2JobsIdErrorsGET = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a job
 * Retrieves a job. Useful to check its status.
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2JobsIdGET = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Import users
 * Imports users to a connection from a file using a long running job. <strong>Important:</strong> The documentation for the file format is <a href=https://docs.auth0.com/bulk-import>here</a>.
 *
 * body String  (optional)
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2JobsUsers_importsPOST = function(body,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Send a \"verify email address\" email
 * Send an email to the specified user that asks them to click a link to verify their email address.
 *
 * body String  (optional)
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2JobsVerification_emailPOST = function(body,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

