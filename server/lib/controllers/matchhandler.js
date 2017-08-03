const db = require('../../../db/config');

const objectCompare = (object1, object2) => {
  let results = 0;
  for (const key in object2) {
    if (object1[key] === object2[key]) {
      results += 1;
    }
  }
  return results >= 3;
};

module.exports = (item, status, callback) => {
  db.status.find({ returned: false })
    .then((data) => {
      data.forEach((object) => {
        if (objectCompare(item, object)) {
          item.matches.push(object);
        }
      });
      callback(item);
    });
};
