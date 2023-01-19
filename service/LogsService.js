'use strict';


/**
 * Search log events
 * Retrieves log entries that match the specified search criteria (or list all entries if no criteria is used).<br/>You can search with a criteria using the <code>q</code> parameter or you can search by a specific log ID (search by checkpoint):<br/><br/><h5>The search by criteria can use the following parameters:</h5><ul><li><b>q:</b> Search Criteria using <a href=\"https://auth0.com/docs/api/management/v2/query-string-syntax\">Query String Syntax</a></li><li><b>page:</b> The page number. Zero based</li><li><b>per_page:</b> The amount of entries per page</li><li><b>sort:</b> The field to use for sorting. Use <code>field:order</code>, where order is <code>1</code> for ascending and <code>-1</code> for descending. For example <code>date:-1</code></li><li><b>fields:</b> A comma separated list of fields to include or exclude (depending on include_fields) from the result, empty to retrieve all fields</li><li><b>include_fields:</b> <code>true</code> if the fields specified are to be included in the result, <code>false</code> otherwise. Defaults to <code>true</code></li><li><b>include_totals:</b> <code>true</code> if a query summary must be included in the result, false otherwise. Default <code>false</code>.</li></ul><h5>The search by checkpoint use the following parameters:</h5><ul><li><b>from:</b> Log Event Id to start retrieving logs. You can limit the amount of logs using the <code>take</code> parameter.</li><li><b>take:</b> The total amount of entries to retrieve when using the <code>from</code> parameter.</li></ul> <h5>Event acronym mapping</h5><ul><li>s: Success Login </li><li>seacft: Success Exchange (Authorization Code for Access Token)</li><li>feacft: Failed Exchange (Authorization Code for Access Token)</li><li>seccft: Success Exchange (Client Credentials for Access Token)</li><li>feccft: Failed Exchange (Client Credentials for Access Token)</li><li>f: Failed Login </li><li>w: Warnings During Login </li><li>du: Deleted User </li><li>fu: Failed Login (invalid email/username) </li><li>fp: Failed Login (wrong password) </li><li>fc: Failed by Connector </li><li>fco: Failed by CORS </li><li>con: Connector Online </li><li>coff: Connector Offline </li><li>fcpro: Failed Connector Provisioning </li><li>ss: Success Signup </li><li>fs: Failed Signup </li><li>cs: Code Sent </li><li>cls: Code/Link Sent </li><li>sv: Success Verification Email </li><li>fv: Failed Verification Email </li><li>scp: Success Change Password </li><li>fcp: Failed Change Password </li><li>sce: Success Change Email </li><li>fce: Failed Change Email </li><li>scu: Success Change Username </li><li>fcu: Failed Change Username </li><li>scpn: Success Change Phone Number </li><li>fcpn: Failed Change Phone Number </li><li>svr: Success Verification Email Request </li><li>fvr: Failed Verification Email Request </li><li>scpr: Success Change Password Request </li><li>fcpr: Failed Change Password Request </li><li>fn: Failed Sending Notification </li><li>sapi: API Operation </li><li>fapi: Failed API Operation </li><li>limit_wc: Blocked Account </li><li>limit_mu: Blocked IP Address </li><li>limit_ui: Too Many Calls to /userinfo </li><li>api_limit: Rate Limit On API </li><li>sdu: Successful User Deletion </li><li>fdu: Failed User Deletion </li><li>slo: Success Logout</li><li>flo: Failed Logout</li><li>sd: Success Delegation</li><li>fd: Failed Delegation</li></ul> <h5>List of fields that can be used in fields and sort</h5><ul><li>date: The moment when the event occured.</li><li>connection: The connection related to the event.</li><li>client_id: The client id related to the event</li><li>client_name: The name of the client related to the event.</li><li>ip: The IP address from where the request that caused the log entry originated.</li><li>user_id: The user id related to the event.</li><li>user_name: The user name related to the event.</li><li>description: The description of the event.</li><li>user_agent: The user agent that is related to the event.</li><li>type: The event type. Refer to the event acronym mappings above for a list of possible event types.</li><li>details: The details object of the event.</li><li>strategy: The connection strategy related to the event.</li><li>strategy_type: The connection strategy type related to the event.</li></ul>
 *
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2LogsGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a log event by id
 * Retrieves the data related to the log entry identified by id. This returns a single log entry representation as specified in the schema.
 *
 * id String 
 * authorization String  (optional)
 * no response value expected for this operation
 **/
exports.apiV2LogsIdGET = function(id,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

