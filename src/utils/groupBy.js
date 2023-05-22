export const groupByMarketer = (objects) => {
  const groupedObjects = objects.reduce((groups, obj) => {
    const group = obj.marketerName;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(obj);
    return groups;
  }, {});
  return groupedObjects;
};

export const groupByOrder = (objects) => {
  const groupedObjects = objects.reduce((groups, obj) => {
    const group =
      obj.shopping_list.products_in_shopping_list[0].product.marketer.name;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(obj);
    return groups;
  }, {});
  return groupedObjects;
};
