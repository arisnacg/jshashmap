const jshashmap = {
  objToMap(object) {
    return new Map(Object.entries(object));
  },
  arrayToMap(arr) {
    const arrMap = [];
    arr.forEach((e, i) => {
      arrMap.push([i, e]);
    });
    return new Map(arrMap);
  },
};

module.exports = jshashmap;
