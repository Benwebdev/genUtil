import $ from 'jquery';

/**
* Build a macro-promise for all given promises.
* This is useful when waiting on multiple state resolutions,
* allowing multiple promises to be tracked by an aggregate.
* @param {...Promise|Array} promises to aggregate into a single transaction.
* @return {Promise} will resolve or reject when all promises finish.
*/

export const all = (...promises) => {
	if (promises[0] instanceof Array) {
		promises = promises[0];
	}
	var deferred = $.Deferred();
	var expected = promises.length;
	var successes = [];
	var failures = [];

	for (var i = 0; i < expected; i++) {
		if (promises[i]) {
			promises[i].then(function (res) {
				successes.push(res);
				done();
			}, function (mssg) {
				failures.push(mssg);
				done();
			});
		}
	}

	function done() {
		if (successes.length === expected) {
			deferred.resolve(successes);
		} else if (successes.length + failures.length === expected) {
			deferred.reject(failures, successes);
		}
	}

	return deferred.promise();
};
