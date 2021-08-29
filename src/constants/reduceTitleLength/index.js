const reduceTitleLength = (string, maxLength) => {
  if (string?.length > maxLength) {
    let trimmedString = string.substr(0, maxLength);

    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
    );

    return `${trimmedString}...`;
  } else {
    return string;
  }
};

export default reduceTitleLength;
