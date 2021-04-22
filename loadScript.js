/**
* Loads a script file - This uses the shared "Chorus.AddScript" if available
* but backs up to standard dom-based injection
@param {String} Url of remore script to load
*/
export const loadScript = (scriptUrl, callback) => {
	var script = document.createElement('script');
	if (typeof callback === 'function') { script.onload = callback; }
	script.async = true;
	script.src = scriptUrl;
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(script, node);
	return script;
};
