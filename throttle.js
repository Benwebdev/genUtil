/**
 * Throttles a function to only run once ever N milliseconds:
 * @param {Function} function to invoke.
 * @param {Number} throttle time limit, in milliseconds.
 * @param {Object} binding context in which the function is invoked.
 * @returns {Function} the throttled function.
 */




export const throttle = (fn, limit, context) => {
    var timer = null;
    var called = false;
    var limiter = function () {
        if (timer) {
            called = true;
            return;
        }

        context = context || this;
        fn.call(context);

        timer = setTimeout(function () {
            var recall = called;
            timer = null;
            called = false;
            if (recall)
                limiter.call(context);
        }, limit);
    };
    return limiter;
};
