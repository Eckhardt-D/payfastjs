module.exports = function(obj) {
  let str = "";
  let objArr = Object.keys(obj);
  objArr.forEach((key, index) => {
    str += `${key}=${encodeURIComponent(obj[key])}${
      index == objArr.length - 1 ? "" : "&"
    }`;
  });

  return str;
};
