'use strict';


/**
 * Get all connections
 * Retrieves every connection matching the specified strategy. All connections are retrieved if no strategy is being specified. Accepts a list of fields to include or exclude in the resulting list of connection objects.
 *
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2ConnectionsGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a connection
 * Deletes a connection and all its users.
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2ConnectionsIdDELETE = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a connection
 * Retrieves a connection by its <code>id</code>.
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2ConnectionsIdGET = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a connection
 * Note: if you use the options parameter, the whole options object will be overridden, ensure all parameters are present
 *
 * body String  (optional)
 * id String 
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2ConnectionsIdPATCH = function(body,id,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a connection user
 * Deletes a specified connection user by its email (currently only database connections are supported and you cannot delete all users from specific connection).
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2ConnectionsIdUsersDELETE = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a connection
 * Creates a new connection according to the JSON object received in <code>body</code>.<br/> The samples on the right show all available attributes. Mandatory attributes are <code>name</code> and <code>strategy</code>.<br/> Valid Strategy names are: <code>ad</code>, <code>adfs</code>, <code>amazon</code>, <code>dropbox</code>, <code>bitbucket</code>, <code>aol</code>, <code>auth0-adldap</code>, <code>auth0-oidc</code>, <code>auth0</code>, <code>baidu</code>, <code>bitly</code>, <code>box</code>, <code>custom</code>, <code>dwolla</code>, <code>email</code>, <code>evernote-sandbox</code>, <code>evernote</code>, <code>exact</code>, <code>facebook</code>, <code>fitbit</code>, <code>flickr</code>, <code>github</code>, <code>google-apps</code>, <code>google-oauth2</code>, <code>google-openid</code>, <code>instagram</code>, <code>ip</code>, <code>linkedin</code>, <code>miicard</code>, <code>oauth1</code>, <code>oauth2</code>, <code>office365</code>, <code>paypal</code>, <code>pingfederate</code>, <code>planningcenter</code>, <code>renren</code>, <code>salesforce-community</code>, <code>salesforce-sandbox</code>, <code>salesforce</code>, <code>samlp</code>, <code>sharepoint</code>, <code>shopify</code>, <code>sms</code>, <code>soundcloud</code>, <code>thecity-sandbox</code>, <code>thecity</code>, <code>thirtysevensignals</code>, <code>twitter</code>, <code>untappd</code>, <code>vkontakte</code>, <code>waad</code>, <code>weibo</code>, <code>windowslive</code>, <code>wordpress</code>, <code>yahoo</code>, <code>yammer</code>, <code>yandex</code>
 *
 * body String  (optional)
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2ConnectionsPOST = function(body,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

