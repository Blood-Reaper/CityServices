const { Vendor } = require('../../models/vendor.schema');
const { StatusCodes } = require('http-status-codes');

const createVendorService = async (userId, data) => {

    const { businessName, category, description, location, phoneNumber } = data;

    // optional: prevent duplicate vendor for same user
    const existingVendor = await Vendor.findOne({ user: userId });

    if (existingVendor) {
        const error = new Error("Vendor already exists for this user");
        error.statusCode = StatusCodes.BAD_REQUEST;
        throw error;
    }

    const vendor = await Vendor.create({
        user: userId,
        businessName,
        category,
        description,
        location,
        phoneNumber
    });

    return {
        id: vendor._id,
        businessName: vendor.businessName,
        category: vendor.category,
        description: vendor.description,
        location: vendor.location,
        phoneNumber: vendor.phoneNumber
    };
};

module.exports = { createVendorService };