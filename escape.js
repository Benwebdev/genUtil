import { escapeMap } from "./escapeMap";

/**
* Parses a string and escapes HTML to the proper entities
* @param {String} params string to escapte
* @returns {String} escapted String
* e.g. _.escape('<b>Hello</b>');
*         -> '&lt;b&gt;Hello&lt;/b&gt;'
*/

export const escape = (string = '') => {
	var escaper = function (match) {
		// match will be replaced with the first item specified in the escapeMap at the top of the page
		return escapeMap[match][0];
	};
	var source = '(?:' + Object.keys(escapeMap).join('|') + ')';
	var replaceRegexp = RegExp(source, 'g');
	return string.replace(replaceRegexp, escaper);
};
