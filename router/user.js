const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");

router.get("/api/v1/users", async (req, res) => {
    try {
        const data = await readData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/home", async (req, res) => {
    res.render("home");
});

module.exports = router;
