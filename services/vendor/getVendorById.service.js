const { Vendor } = require('../../models/vendor.schema');

const getVendorByIdService = async (id) => {
    const vendor = await Vendor.findById(id);

    if (!vendor) {
        throw new Error("Vendor not found");
    }

    return vendor;
};

module.exports = { getVendorByIdService };

// const getVendorByIdService = async (id) => {
//     const vendor = await User.findOne({ _id: id, role: "vendor" })
//         .select("-password -__v");

//     if (!vendor) {
//         const error = new Error("Vendor not found");
//         error.statusCode = 404;
//         throw error;
//     }

//     return vendor;
// };