'use strict';


/**
 * Search users by email
 * If Auth0 is the identify provider (idP), the email address associated with a user is saved in lower case, regardless of how you initially provided it. For example, if you register a user as **JohnSmith@example.com**, Auth0 saves the user's email as **johnsmith@example.com**.  In cases where Auth0 is not the idP, the `email` is stored based on the rules of idP, so make sure the search is made using the correct capitalization.  When using this endpoint, make sure that you are searching for users via email addresses using the correct case.
 *
 * authorization String  (optional)
 * email String Email address to search for (optional)
 * no response value expected for this operation
 **/
exports.apiV2Users_by_emailGET = function(authorization,email) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

