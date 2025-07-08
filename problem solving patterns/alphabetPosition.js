function alphabetPosition(text) {
  let result = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();

    if (char >= "a" && char <= "z") {
      result.push(char.charCodeAt(0) - "a".charCodeAt(0) + 1);
    }
  }
  return result.join(" ");
}

console.log(alphabetPosition("The boys went to the park"));
