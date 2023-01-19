'use strict';


/**
 * Get all rules
 * Retrieves a list of all rules. Accepts a list of fields to include or exclude.<br/> The <code>enabled</code> parameter can be specified to get enabled or disabled rules. The rule's stage of executing could be set to the following values <code>login_success</code>, <code>login_failure</code> or <code>pre_authorize</code>
 *
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2RulesGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a rule
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2RulesIdDELETE = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a rule
 * Retrieves a rule by its ID. Accepts a list of fields to include or exclude in the result.
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2RulesIdGET = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a rule
 *
 * body String  (optional)
 * id String 
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2RulesIdPATCH = function(body,id,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a rule
 * Creates a new rule according to the JSON object received in <code>body</code>.<br/>The samples on the right show you every attribute that could be used. Mandatory attributes are <code>name</code> and <code>script</code>Note: Changing a rule's stage of execution from the default <code>login_success</code> can change the rule's function signature to have user omitted.
 *
 * body String  (optional)
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2RulesPOST = function(body,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

