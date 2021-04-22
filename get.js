  /**
   * Gets the value at path of object. If the resolved value is undefined, the
   * defaultValue is returned in its place.
   * @param {Object} the object to query
   * @param {String} the dot-separated or bracket-accessed path of the property to get, i.e. 'foo.bar[1].baz'
   * @param {Object} the alternative value returned when undefined is the resolved value
   * @returns {Object} the resolved value, or the default
   */
  export const get = (object, path, defaultValue) => {
    var index = 0;
    path = path.replace(/\]/g, '').split(/[\[\.]/);
    while (object != null && index < path.length) {
      object = object[path[index++]];
    }
    return (index && index === path.length && object !== undefined) ?
      object : defaultValue;
  }