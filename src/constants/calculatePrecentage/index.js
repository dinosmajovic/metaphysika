const calculatePrecentageDecrease = (newPrice, oldPrice) => {
  return Math.round(((newPrice - oldPrice) / oldPrice) * 100);
};

export default calculatePrecentageDecrease;
