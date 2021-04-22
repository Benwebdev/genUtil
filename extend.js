/**
 * Extends a base object with properties from additional passed objects:
 * @param {Object} base object to extend.
 * @param {...Object} objects to extend properties from.
 * @returns {Object} the base object, extended by all other argument objects.
 */

export const extend = (base) => {
	for (var i = 1; i < arguments.length; i++) {
		var ext = arguments[i];
		for (var key in ext) {
			if (ext.hasOwnProperty(key))
				base[key] = ext[key];
		}
	}
	return base;
};

