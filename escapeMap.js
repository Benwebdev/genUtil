export const escapeMap = {
	'&': ['&amp;', '&AMP;', '&#x00026;', '&#x0026;', '&#x026;', '&#x26;', '&#38;'],
	'<': ['&lt;', '&LT;', '&#x0003C;', '&#x003C;', '&#x03C;', '&#x3C;', '&#60;'],
	'>': ['&gt;', '&GT;', '&#x0003E;', '&#x003E;', '&#x03E;', '&#x3E;', '&#62;'],
	'"': ['&quot;', '&QUOT;', '&#x00022;', '&#x0022;', '&#x022;', '&#x22;', '&#34;'],
	// These last two can be a little sensetive when dealing with server-based tests.
	// which don't like &apos; or &grave;, as such we're using the unicode hexes as the first option
	"'": ['&#x27;', '&apos;', '&#x00027;', '&#x0027;', '&#x027;', '&#39;'],
	'`': ['&#x60;', '&grave;', '&DiacriticalGrave;', '&#x00060;', '&#x0060;', '&#x060;', '&#96;']
};
