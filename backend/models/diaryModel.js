const mongoose = require("mongoose");

// 1. define the schema 
const diarySchema = new mongoose.Schema(
    {
        diaryEntry: {
            type: String,
            required: true,
        },

        latitude: {
            type: Number,
            required: true,
        },

        longitude: {
            type: Number,
            required: true,
        },
        weather: {
            location: {
                type: String,
                required: true,
                trim: true,
            },

            temperature: {
                type: String,
                required: true,
                trim: true,
            },

            description: {
                type: String,
                required: true,
                trim: true,
            },

            icon: {
                type: String,
                required: true,
            },
        },

         owner: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                    required: true
                },
    },
    
    {
        timestamps: true,
    },
);

// 2. create and export the model 
const Diary = mongoose.model("Diary", diarySchema)

module.exports = Diary;