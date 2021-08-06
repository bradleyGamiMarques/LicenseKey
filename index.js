/**
 * You are given a license key represented as a string s that consists of only
 * alphanumeric characters and dashes. The string is separated into n + 1
 * groups by n dashes. You are also given an integer k.
 *
 * We want to reformat the string s such that each group contains exactly
 * k characters, except for the first group, which could be shorter than k
 * but still must contain at least one character.
 * Furthermore, there must be a dash inserted between two groups, and you
 * should convert all lowercase letters to uppercase.
 *
 * Return the reformatted license key.
 */

/**
 * Understand the problem:
 * Can I restate the problem in my own words?
 * Given a string format it such that the characters in the string are exactly
 * k characters long and are separated by dashes. Convert all lowercase letters
 * to uppercase and the first group can have less than k characters.
 *
 * What are the inputs to this problem?
 * A string s and an integer k.
 *
 * What are the outputs that should come from the solution to this problem?
 * A formatted string.
 *
 * Can the outputs be determined from the inputs? Yes.
 *
 * How should I label the important pieces of data that are a part of the
 * problem?
 * const licenseKeyFormatting = (s, k) => {}
 */

/**
 * Break it down:
 * Concrete examples:
 * s = '5F3Z-2e-9-w', k = 4 => '5F3Z-2E9W'
 * s = '5F3Z-2e-9-w', k = 3 => '5F-3Z2-E9W'
 * s = '5-F3-Z', k = 2 => '5F-3Z'
 * s = '2' => "2"
 */

/** Solve and simplify */

const licenseKeyFormatting = (s, k) => {
  // Sanitize the string of all dashes.
  const sanitizedString = s.replaceAll('-', '').toUpperCase();
  if (sanitizedString.length === 1) return sanitizedString;
  let formattedString = '';
  // Determine if the string can be separated evenly into k groups of
  // characters.
  const remainder = sanitizedString.length % k;
  if (remainder === 0) {
    // Loop and split the string evenly with dashes at k + 1 position.
    formattedString = splitEvenly(sanitizedString, formattedString, k);
  } else {
    // Otherwise write logic that allows for the first group to be less than k
    // characters.
    formattedString = `${sanitizedString.substring(0, remainder)}-${splitEvenly(
        sanitizedString.slice(remainder), formattedString, k)}`;
  }
  // Return the formatted string.
  return formattedString;
};

const splitEvenly = (s, formattedString, k) => {
  for (let i = 0; i <= s.length; i++) {
    if (i % k === 0 && i !== 0) {
      if (i !== s.length) {
        formattedString = formattedString
            .concat(s.slice(i - k, i), '-');
      } else {
        formattedString =`${formattedString}${s.slice(i-k, i)}`;
      }
    }
  }
  return formattedString;
};

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4));
console.log(licenseKeyFormatting('5F3Z-2e-9-w', 3));
console.log(licenseKeyFormatting('5-F3-Z', 2));
console.log(licenseKeyFormatting('2', 4));

