/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let activeWord = strs[0];
  if (strs.length === 1) {
    return strs[0];
  } else {
    activeWord = strs[0];
    //keep track of word
    for (let i = 1; i < strs.length; i++) {
      if (activeWord.length > strs[i].length) {
        activeWord = activeWord.substr(0, strs[i].length);
      }
      //keep track of letter
      for (let j = 0; j < strs[i].length; j++) {
        if (activeWord.substr(0, j + 1) !== strs[i].substr(0, j + 1)) {
          activeWord = activeWord.substr(0, j);
          break;
        }
      }
    }
  }

  return activeWord;
};

console.log(longestCommonPrefix(["aaa", "aa", "aaa"]));
