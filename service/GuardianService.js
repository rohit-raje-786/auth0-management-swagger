'use strict';


/**
 * Delete a Guardian enrollment
 * Deletes an enrollment. Useful when you want to force re-enroll.
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2GuardianEnrollmentsIdDELETE = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a Guardian enrollment
 * Retrieves an enrollment. Useful to check its type and related metadata.
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2GuardianEnrollmentsIdGET = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Guardian factor provider
 * Returns provider configuration
 *
 * factor_name String 
 * name String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2GuardianFactorsFactor_nameProvidersNameGET = function(factor_name,name,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of factors and statuses
 * Retrieves all factors. Useful to check factor enablement and trial status.
 *
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2GuardianFactorsGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Guardian Factor
 * Useful to enable / disable factor
 *
 * body String  (optional)
 * name String 
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2GuardianFactorsNamePUT = function(body,name,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Guardian's Twilio SMS factor provider
 * Useful to configure SMS provider
 *
 * body String  (optional)
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2GuardianFactorsSmsProvidersTwilioPUT = function(body,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get enrollment and verification templates
 * Retrieve both templates. Useful to check if a different template than default were set.
 *
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2GuardianFactorsSmsTemplatesGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update enrollment and verification SMS templates.
 * Useful to send custom messages on sms enrollment and verification
 *
 * body String  (optional)
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2GuardianFactorsSmsTemplatesPUT = function(body,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

