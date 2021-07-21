const findItemIndex = (items, label) => {
  const itemIndex = items.findIndex((item) => {
    return item.label === label;
  });

  return itemIndex;
};

export default findItemIndex;
