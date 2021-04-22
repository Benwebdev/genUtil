/**
* Parses a params object into a query string.
* This is similar to the jQuery `$.param()` method,
* except that variable encoding is intentionally not modified
* (this assures that pre-encoded variables are not RE-encoded).
* <ul>
*   <li>input: {url: "http%3A%2F%2Faweso.me", utm_source: "social"}</li>
*   <li>output: "url=http%3A%2F%2Faweso.me&utm_source=social"</li>
* </ul>
* @param {Object} params object with key/value pairs to encode.
* @returns {String} formatted query string.
* @private
*/
export const paramitize = (params) => {
	var list = [];
	for (var key in params) {
		if (params.hasOwnProperty(key))
			list.push(key + '=' + params[key]);
	}
	return list.join('&');
};
