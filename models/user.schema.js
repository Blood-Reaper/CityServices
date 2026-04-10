const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const {
    NAME_MAX_LENGTH,
    PASSWORD_MIN_LENGTH
} = require("../constants/user.constant");

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            trim: true,
            maxLength: [NAME_MAX_LENGTH],
        },

        lastName: {
            type: String,
            trim: true,
            maxLength: [NAME_MAX_LENGTH],
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            index: true,
            lowercase: true,
            trim: true,
            validate: {
                validator: function (email) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                },
                message: "Invalid email format",
            },
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [PASSWORD_MIN_LENGTH],
            select: false,
        },

        role: {
            type: String,
            enum: ["user", "vendor"],
            default: "user",
        },

        isEmailVerified: {
            type: Boolean,
            default: false,
        },

        refreshTokens: [
            {
                token: String,
                createdAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//
// 🔐 Hash password automatically
//
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

//
// 🧹 Remove sensitive data from API response
//
userSchema.set("toJSON", {
    transform: function (doc, ret) {
        delete ret.password;
        delete ret.refreshTokens;
        return ret;
    },
});

const User = model("User", userSchema);

module.exports = { User };