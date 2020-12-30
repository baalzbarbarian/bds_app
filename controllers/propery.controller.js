const property = require("../models/property");

exports._property_addNew = (req, res) => {
  const newProperty = new property({
    name: req.body.name,
    address: req.body.address,
    price: req.body.price,
    acreage: req.body.acreage,
    description: req.body.description,
    cover_img: req.body.cover_img,
    detail_imgs: {
      img_1: req.body.img_1,
      img_2: req.body.img_2,
      img_3: req.body.img_3,
      img_4: req.body.img_4,
    },
    create_at: new Date(),
    update_at: null,
    delete_at: null,
  });

  newProperty.save(function (err, newProperty) {
    if (err) return console.log(err);
    res.json({
      status: 1,
      message: "Add new property successfully",
      property: newProperty,
    });
  });
};

exports._property_getall = async (req, res) => {
  await property.find({}, function (err, result) {
    if (err) return console.log(err);
    res.json({
      status: 1,
      message: "Get all property successfully!",
      data: result,
    });
  });
};
