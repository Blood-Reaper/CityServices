const express = require("express");
const vendorRouter = express.Router();

const {
    createVendorController,
    getAllVendorsController,
    getVendorByIdController,
    updateVendorController,
    deleteVendorController
} = require("../controllers/vendor.controller");
const { authenticate } = require("../middlewares/authenticate.middleware");



// CREATE vendor
vendorRouter.post("/", authenticate, createVendorController);

// GET all vendors
vendorRouter.get("/", getAllVendorsController);

// GET vendor by id
vendorRouter.get("/:id", getVendorByIdController);

// UPDATE vendor
vendorRouter.patch("/:id", updateVendorController);

// DELETE vendor
vendorRouter.delete("/:id", deleteVendorController);

// ✅ IMPORTANT FIX (THIS WAS YOUR ERROR)
module.exports = {vendorRouter};