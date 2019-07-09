const express = require("express"),
router = express.Router(),
passport = require("passport"),

async      = require("async"),
middleware = require("../middleware"),
nodemailer = require("nodemailer"),
mongoose = require("mongoose");
// var cloudinary = require('cloudinary');


function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


// cloudinary.config({
//     cloud_name: 'saikiran2211',
//     api_key: '325518163817134',
//     api_secret: 'EUrowRf2-p9cmCy4UMGb3NHhPPU'
// });

// root route





//db.stores.find( { $text: { $search: "java coffee shop" } } )

module.exports = router;