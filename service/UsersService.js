'use strict';


/**
 * List or search users
 *
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2UsersGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a user
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2UsersIdDELETE = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a list of Guardian enrollments
 * Retrieves all Guardian enrollments.
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2UsersIdEnrollmentsGET = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a user
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2UsersIdGET = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Link a user account
 * Links the account specified in the body (<strong>secondary account</strong>) to the account specified by the <code>id</code> param of the URL (<strong>primary account</strong>).<br>There are two ways of invoking the endpoint:<br><ul><li>With the authenticated primary account's JWT in the Authorization header, which has the <code>update:current_user_identities</code> scope: <pre> POST /api/v2/users/PRIMARY_ACCOUNT_USER_ID/identities Authorization: \"Bearer PRIMARY_ACCOUNT_JWT\" {   \"link_with\": \"SECONDARY_ACCOUNT_JWT\" } </pre>In this case only the <code>link_with</code> param is required in the body, containing the JWT obtained upon the secondary account's authentication.</li><li>With an API V2 generated token with <code>update:users</code> scope: <pre> POST /api/v2/users/PRIMARY_ACCOUNT_USER_ID/identities Authorization: \"Bearer YOUR_API_V2_TOKEN\" {   \"provider\": \"SECONDARY_ACCOUNT_PROVIDER\",   \"connection_id\": \"SECONDARY_ACCOUNT_CONNECTION_ID(OPTIONAL)\",   \"user_id\": \"SECONDARY_ACCOUNT_USER_ID\" } </pre>In this case you need to send <code>provider</code> and <code>user_id</code> in the body. Optionally you can also send the <code>connection_id</code> param which is suitable for identifying a particular database connection for the 'auth0' provider.</li></ul>On successful linking, the endpoint returns the new array of the primary account identities.
 *
 * body String  (optional)
 * id String 
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2UsersIdIdentitiesPOST = function(body,id,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Unlink a user identity
 * Unlinks an identity from the target user, and it becomes a separated user again. 
 *
 * id String 
 * provider String 
 * user_id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2UsersIdIdentitiesProviderUser_idDELETE = function(id,provider,user_id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a user's multifactor provider
 *
 * id String 
 * provider String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2UsersIdMultifactorProviderDELETE = function(id,provider,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update a user
 * Updates a user with the object's properties received in the request's body (the object should be a JSON object).<br/>These are the attributes that can be updated at the root level:<ul><li>blocked</li><li>email_verified</li><li>email</li><li>verify_email</li><li>password</li><li>phone_number</li><li>phone_verified</li><li>verify_password</li><li>user_metadata</li><li>app_metadata</li><li>username</li></ul>Some considerations:<ul><li>The properties of the new object will replace the old ones.</li><li>The metadata fields are an exception to this rule (<code>user_metadata</code> and <code>app_metadata</code>). These properties are merged instead of being replaced but be careful, the merge only occurs on the first level.</li><li>If you are updating <code>email_verified</code>, <code>phone_verified</code>, <code>username</code> or <code>password</code> you need to specify the <code>connection</code> property too.</li><li>If your are updating <code>email</code> or <code>phone_number</code> you need to specify the <code>connection</code> and the <code>client_id</code> properties.</ul><h5>Updating a field (non-metadata property)</h5>To mark the email address of a user as verified, the body to send should be:<pre><code>{ \"email_verified\": true }</code></pre><h5>Updating a user metadata root property</h5>Let's asume that our test user has the following <code>user_metadata</code>:<pre><code>{ \"user_metadata\" : { \"profileCode\": 1479 } }</code></pre>To add the field <code>addresses</code> the body to send should be:<pre><code>{ \"user_metadata\" : { \"addresses\": {\"work_address\": \"100 Industrial Way\"} }}</code></pre>The modified object ends up with the following <code>user_metadata</code> property:<pre><code>{   \"user_metadata\": {     \"profileCode\": 1479,     \"addresses\": { \"work_address\": \"100 Industrial Way\" }   } }</code></pre><h5>Updating an inner user metadata property</h5>Starting from previous user metadata, if we want to add the field <code>\"home_address\": \"742 Evergreen Terrace\"</code> in <code>addresses</code> we should send the whole addresses object (since this object is on the first level, it will be merged in, but it's own properties won't). The body to send should be: <pre><code>{   \"user_metadata\": {     \"addresses\": {       \"work_address\": \"100 Industrial Way\",       \"home_address\": \"742 Evergreen Terrace\"     }   } }</code></pre>The modified object ends up with the following <code>user_metadata</code> property:<pre><code>{   \"user_metadata\": {     \"profileCode\": 1479,     \"addresses\": {       \"work_address\": \"100 Industrial Way\",       \"home_address\": \"742 Evergreen Terrace\"     }   } }</code></pre>
 *
 * body String  (optional)
 * id String 
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2UsersIdPATCH = function(body,id,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Removes the current recovery token, generates and returns a new one
 *
 * body String  (optional)
 * id String 
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2UsersIdRecovery_code_regenerationPOST = function(body,id,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a user
 * Creates a new user according to the JSON object received in <code>body</code>.<br/> The samples on the right show you every attribute that could be used. The attribute <code>connection</code> is always mandatory but depending on the type of connection you are using there could be others too. For instance, Auth0 DB Connections require <code>email</code> and <code>password</code>.
 *
 * body String  (optional)
 * authorization String  (optional)
 * contentType String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2UsersPOST = function(body,authorization,contentType) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user's log events
 * Retrieve every log event for a specific user id<br/><h5>Event acronym mapping</h5><ul><li>s: Success Login </li><li>seacft: Success Exchange (Authorization Code for Access Token)</li><li>feacft: Failed Exchange (Authorization Code for Access Token)</li><li>seccft: Success Exchange (Client Credentials for Access Token)</li><li>feccft: Failed Exchange (Client Credentials for Access Token)</li><li>f: Failed Login </li><li>w: Warnings During Login </li><li>du: Deleted User </li><li>fu: Failed Login (invalid email/username) </li><li>fp: Failed Login (wrong password) </li><li>fc: Failed by Connector </li><li>fco: Failed by CORS </li><li>con: Connector Online </li><li>coff: Connector Offline </li><li>fcpro: Failed Connector Provisioning </li><li>ss: Success Signup </li><li>fs: Failed Signup </li><li>cs: Code Sent </li><li>cls: Code/Link Sent </li><li>sv: Success Verification Email </li><li>fv: Failed Verification Email </li><li>scp: Success Change Password </li><li>fcp: Failed Change Password </li><li>sce: Success Change Email </li><li>fce: Failed Change Email </li><li>scu: Success Change Username </li><li>fcu: Failed Change Username </li><li>scpn: Success Change Phone Number </li><li>fcpn: Failed Change Phone Number </li><li>svr: Success Verification Email Request </li><li>fvr: Failed Verification Email Request </li><li>scpr: Success Change Password Request </li><li>fcpr: Failed Change Password Request </li><li>fn: Failed Sending Notification </li><li>sapi: API Operation </li><li>fapi: Failed API Operation </li><li>limit_wc: Blocked Account </li><li>limit_mu: Blocked IP Address </li><li>limit_ui: Too Many Calls to /userinfo </li><li>api_limit: Rate Limit On API </li><li>sdu: Successful User Deletion </li><li>fdu: Failed User Deletion </li><li>slo: Success Logout</li><li>flo: Failed Logout</li><li>sd: Success Delegation</li><li>fd: Failed Delegation</li></ul> <h5>List of fields that can be used in fields and sort</h5><ul><li>date: The moment when the event occured.</li><li>connection: The connection related to the event.</li><li>client_id: The client id related to the event</li><li>client_name: The name of the client related to the event.</li><li>ip: The IP address from where the request that caused the log entry originated.</li><li>user_id: The user id related to the event.</li><li>user_name: The user name related to the event.</li><li>description: The description of the event.</li><li>user_agent: The user agent that is related to the event.</li><li>type: The event type. Refer to the event acronym mappings above for a list of possible event types.</li><li>details: The details object of the event.</li><li>strategy: The connection strategy related to the event.</li><li>strategy_type: The connection strategy type related to the event.</li></ul>
 *
 * user_id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2UsersUser_idLogsGET = function(user_id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

