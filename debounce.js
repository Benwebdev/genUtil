/**
  * Debounces a function to only run after repeated invocations have stopped.
  * @param {Function} function to debounce.
  * @param {Number} time in milliseconds to delay invocation.
  * @param {Object} binding context in which the function is invoked.
  * @returns {Function} the debounced function.
  */
export const debounce = (fn, delay, context) => {
	var timer;

	return function () {
		var callTarget = context || this;
		var callArgs = arguments;
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.apply(callTarget, callArgs);
		}, delay);
	};
};
