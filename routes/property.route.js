module.exports = function (app) {
  const property = require("../controllers/propery.controller");
  app.route("/v1/property/addNewProperty").post(property._property_addNew);
  app.route("/v3/property/getAllProperty").get(property._property_getall);
};
