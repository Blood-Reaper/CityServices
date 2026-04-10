const { Vendor } = require('../../models/vendor.schema');

const getAllVendorsService = async (query) => {

    const filter = {};

    if (query.category) {
        filter.category = {
            $regex: query.category,
            $options: "i"
        };
    }

    if (query.city) {
        filter["location.city"] = {
            $regex: query.city,
            $options: "i"
        };
    }

    if (query.area) {
        filter["location.area"] = {
            $regex: query.area,
            $options: "i"
        };
    }

    const vendors = await Vendor.find(filter);

    return vendors;
};

module.exports = {
    getAllVendorsService,
};