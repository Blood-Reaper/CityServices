const { Schema, model } = require("mongoose");

const vendorSchema = new Schema(
{
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    businessName: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    location: {
        city: {
            type: String,
            required: true
        },
        area: {
            
            type: String,
            required: true
        }
    },

    phoneNumber: {
        type: String,
        required: true,
        unique: true
    }
},
{
    timestamps: true,
    versionKey: false
}
);

const Vendor = model("Vendor", vendorSchema);

module.exports = { Vendor };