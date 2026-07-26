const mongoose = require("mongoose");
const Diary = require("../models/diaryModel");

const getDiary =  async (req, res) => {
    // res.send("hello world!") //for testing
    const diary = await Diary.find({
             owner: req.user.userId
        });
        res.json(diary);
}

const createDiary = async (req, res) => {

    const  { diaryEntry, latitude, longitude,  weather }  = req.body
    console.log(req.body);

    const diary = await Diary.create({
        diaryEntry,
        latitude,
        longitude,
        weather,
        owner: req.user.userId
    });

    res.status(201).json(diary);
}

const deleteDiary = async (req, res) => {
    const { id } = req.params

    const diary = await Diary.findByIdAndDelete(id);

    res.status(200).json({
        message: "Record deleted",
    })
}

module.exports = {
    getDiary,
    createDiary,
    deleteDiary,
}

