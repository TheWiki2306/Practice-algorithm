const anagram = (str1, str2) => {
  let freqStr1 = {};
  let freqStr2 = {};

  const formattedString1 = str1.toLowerCase().replace(/\s+/g, "");
  const formattedString2 = str2.toLowerCase().replace(/\s+/g, "");

  if (formattedString1.length != formattedString2.length) {
    return false;
  }

  for (const char of formattedString1) {
    freqStr1[char] = (freqStr1[char] || 0) + 1;
  }
  for (const char of formattedString2) {
    freqStr2[char] = (freqStr2[char] || 0) + 1;
  }

  for (const char in freqStr1) {
    if (freqStr1[char] !== freqStr2[char]) {
      return false;
    }
  }

  return true;
};

console.log(anagram("", ""));
console.log(anagram("aaz", "zza"));
console.log(anagram("anagram", "nagaram"));
console.log(anagram("rat", "car"));
console.log(anagram("awesome", "awesom"));
console.log(anagram("amanaplanacanalpanama", "acanalmanplanpamana"));
console.log(anagram("qwerty", "qeywrt"));
console.log(anagram("texttwisttime", "timetwisttext"));
