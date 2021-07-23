const calculatePrecentageDecrease = (currentPrice, oldPrice) => {
  return Math.round(((currentPrice - oldPrice) / currentPrice) * 100);
};

export default calculatePrecentageDecrease;
