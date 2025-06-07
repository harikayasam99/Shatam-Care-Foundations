const mongoose = require('mongoose');

const CareSeekerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true
    },
    address: {
        city: {
            type: String,
            required: [true, 'Please add a city']
        },
        state: {
            type: String,
            required: [true, 'Please add a state']
        },
        country: {
            type: String,
            required: [true, 'Please add a country']
        }
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: [true, 'Please specify gender']
    },
    age: {
        type: Number,
        required: [true, 'Please add age']
    },
    disease: {
        type: String,
        required: [true, 'Please specify the medical condition']
    },
    language: [{
        type: String,
        required: [true, 'Please specify preferred language(s)']
    }],
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 0
    },
    feedback: [{
        comment: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('CareSeeker', CareSeekerSchema);