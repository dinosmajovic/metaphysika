const getUniqueChars = (char) => {
  let uniqueChars = [];
  char.forEach((c) => {
    if (!uniqueChars.includes(c)) {
      uniqueChars.push(c);
    }
  });
  return uniqueChars;
};

export default getUniqueChars;
