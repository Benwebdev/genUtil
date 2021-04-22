/**
* Parses a params string into an object.
* <ul>
*   <li>input: "?utm_campaign=vox&utm_source=social"</li>
*   <li>output: {utm_campaign: "vox", utm_source: "social"}</li>
* </ul>
* @param {String} params url-encoded variables string to parse.
* @returns {Object} an object with key/value pairs for all params.
* @private
*/



export const deparamitize = (params) => {
	var obj = {};
	params = (params || '').replace(/^(\?|\&)/, '').split('&');
	for (var i = 0; i < params.length; i++) {
		// split on greedy regex because thumbor urls, which get passed to pinterest.
		// can contain '=' in them.
		var pair = params[i].split(/=(.+)?/);
		if (pair.length > 1)
			obj[pair[0]] = pair[1] || '';
	}
	return obj;
};
