export const arrayToObject = (array, key) => {
  if (Array.isArray(array) && typeof key === 'string') {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item
      };
    }, initialValue);
  }
  return {};
};