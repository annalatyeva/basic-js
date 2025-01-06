const {NotImplementedError} = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let stringN = n.toString();
	let maxN = 0;
	let maxNIndex = 0;
	for (let i = 0; i < stringN.length; i += 1) {
		let thisN = stringN.slice(0, i) + stringN.slice(i + 1);
		if (parseInt(thisN) > maxN) {
			maxN = parseInt(thisN);
			maxNIndex = i;
		}
	}

	let resultStr = stringN.slice(0, maxNIndex) + stringN.slice(maxNIndex + 1);
	return parseInt(resultStr);
}

module.exports = {
	deleteDigit,
};
