import { escapeMap } from "./escapeMap";

/**
* Parses a string and unescapes HTML to the proper entities
* @param {String} params string to unescaptes
* @returns {String} unescaptes String
* e.g. _.escape('&lt;b&gt;Hello&lt;/b&gt;');
*         -> '<b>Hello</b>'
*/
const unescape = (string = '') => {
	for (var key in escapeMap) {
		var source = '(?:' + escapeMap[key].join('|') + ')';
		var replaceRegexp = RegExp(source, 'g');
		string = string.replace(replaceRegexp, key);
	}
	return string;
};
