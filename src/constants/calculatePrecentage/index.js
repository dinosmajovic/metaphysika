const calculatePrecentageDecrease = (currentPrice, oldPrice) => {
  console.log(currentPrice, oldPrice);
  return Math.round(((oldPrice - currentPrice) / oldPrice) * 100);
};

export default calculatePrecentageDecrease;
