const { Vendor } = require('../../models/vendor.schema');

const deleteVendorService = async (id) => {
    const vendor = await Vendor.findOneAndDelete({
        _id: id,
        role: "vendor"
    });

    if (!vendor) {
        throw new Error("Vendor not found");
    }

    return { message: "Vendor deleted" };
};

module.exports = { deleteVendorService };



// const deleteVendorService = async (id) => {
//     const vendor = await User.findOneAndDelete({
//         _id: id,
//         role: "vendor"
//     });

//     if (!vendor) {
//         const error = new Error("Vendor not found");
//         error.statusCode = 404;
//         throw error;
//     }

//     return { message: "Vendor deleted successfully" };
// };