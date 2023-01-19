'use strict';


/**
 * List device credentials
 * You can use the device-credentials endpoint using Basic authentication with username and password from a database connection<br />The Authorization header should be <code>Authorization: Basic base64(\"{db_conn_name}\\{user}:{password}\")</code> 
 *
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2Device_credentialsGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a device credential
 * You can use the device-credentials endpoint using Basic authentication with username and password from a database connection<br />The Authorization header should be <code>Authorization: Basic base64(\"{db_conn_name}\\{user}:{password}\")</code> 
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2Device_credentialsIdDELETE = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a device public key
 * You can use the device-credentials endpoint using Basic authentication with username and password from a database connection<br />The Authorization header should be <code>Authorization: Basic base64(\"{db_conn_name}\\{user}:{password}\")</code> 
 *
 * body String  (optional)
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2Device_credentialsPOST = function(body,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

