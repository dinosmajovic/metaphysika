const transformProductName = (productName) => {
  const splitProductName = productName.split('-');

  const newName = splitProductName[0];
  return newName;
};

export default transformProductName;
