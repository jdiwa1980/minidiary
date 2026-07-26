const express = require("express");
const protect = require("../middleware/authMiddleware")

const { 
        getDiary, 
        createDiary,
        deleteDiary
    } = require("../controllers/diaryController")

const router = express.Router();

router.route("/")
    .get(protect, getDiary)
    .post(protect, createDiary)
    
router.route("/:id")
    .delete(protect, deleteDiary)

module.exports = router;
