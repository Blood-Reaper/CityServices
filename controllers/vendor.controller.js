const {
    createVendorService
} = require("../services/vendor/createVendor.service");

const {
    getAllVendorsService
} = require("../services/vendor/getAllVendors.service");

const {
    getVendorByIdService
} = require("../services/vendor/getVendorById.service");

const {
    updateVendorService
} = require("../services/vendor/updateVendor.service");

const {
    deleteVendorService
} = require("../services/vendor/deleteVendor.service");

// CREATE
const createVendorController = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const result = await createVendorService(userId, req.body);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
};

// GET ALL
const getAllVendorsController = async (req, res, next) => {
    try {
        const result = await getAllVendorsService(req.query);
        res.json(result);
    } catch (err) {
        next(err);
    }
};

// GET BY ID
const getVendorByIdController = async (req, res, next) => {
    try {
        const result = await getVendorByIdService(req.params.id);
        res.json(result);
    } catch (err) {
        next(err);
    }
};

// UPDATE
const updateVendorController = async (req, res, next) => {
    try {
        const result = await updateVendorService(req.params.id, req.body);
        res.json(result);
    } catch (err) {
        next(err);
    }
};

// DELETE
const deleteVendorController = async (req, res, next) => {
    try {
        const result = await deleteVendorService(req.params.id);
        res.json(result);
    } catch (err) {
        next(err);
    }
};

// EXPORT (VERY IMPORTANT)
module.exports = {
    createVendorController,
    getAllVendorsController,
    getVendorByIdController,
    updateVendorController,
    deleteVendorController
};