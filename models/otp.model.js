const { Schema, model } = require("mongoose");

const otpSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        otp: {
            type: String,
            required: true,
        },

        purpose: {
            type: String,
            enum: ["login", "signup", "reset_password"],
            required: true,
        },

        attempts: {
            type: Number,
            default: 0,
        },

        expiresAt: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//
// ⏳ TTL INDEX (auto delete after expiry)
//
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

//
// 🚀 Model
//
const OTP = model("OTP", otpSchema);

module.exports = { OTP };