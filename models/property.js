const mongoose = require("mongoose");
const schema = mongoose.Schema;

const property = new schema({
    name: String,
    address: String,
    price: String,
    acreage: Number,
    description: String,
    door_direction: String,
    cover_img: String,
    detail_imgs: {
        img_1: String,
        img_2: String,
        img_3: String,
        img_4: String,
    },
    create_at: Date,
    update_at: Date,
    delete_at: Date,
});

module.exports = mongoose.model("property", property);
