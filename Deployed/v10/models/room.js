var mongoose = require("mongoose");

var roomSchema = mongoose.Schema({
    messages: [
        {
            username: String,
            msg: String,
            created: {
                type: Date,
                default: Date.now,
            }
        }
    ]
});

module.exports = mongoose.model("Room", roomSchema);
