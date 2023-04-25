export const groupByMarketer = objects => {
  const groupedObjects = objects.reduce((groups, obj) => {
    const group = obj.marketerName;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(obj);
    return groups;
  }, {});
  return groupedObjects
};
