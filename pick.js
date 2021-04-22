/**
  * Picks select attributes names from an object.
  * @param {Object} base object to pick fields from.
  * @param {...String} fields to pick from the model.
  * @returns {Object} a new object with the requested field names.
  */

export const pick = (base) => {
    var data = {};
    for (var i = 1; i < arguments.length; i++) {
        data[arguments[i]] = base[arguments[i]];
    }
    return data;
};
