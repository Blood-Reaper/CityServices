const { Vendor } = require('../../models/vendor.schema');

const updateVendorService = async (id, data) => {
    const vendor = await Vendor.findOneAndUpdate(
        { _id: id, role: "vendor" },
        data,
        { new: true }
    );

    if (!vendor) {
        throw new Error("Vendor not found");
    }

    return vendor;
};

module.exports = { updateVendorService };



// const { hashPassword } = require('../../providers/auth/bcrypt.provider');

// const updateVendorService = async (id, data) => {
//     if (data.password) {
//         data.password = await hashPassword(data.password);
//     }

//     const vendor = await User.findOneAndUpdate(
//         { _id: id, role: "vendor" },
//         { $set: data },
//         { new: true, runValidators: true }
//     ).select("-password -__v");

//     if (!vendor) {
//         const error = new Error("Vendor not found");
//         error.statusCode = 404;
//         throw error;
//     }

//     return vendor;
// };