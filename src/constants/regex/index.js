export const capitalizeName = (name) => {
  return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
};

export const uppercaseWords = (str) =>
  str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
