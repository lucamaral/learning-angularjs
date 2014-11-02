module.exports = function (app) {

    var Schema = require("mongoose").Schema;

    var todo = Schema({
        text: {
            type: String,
            required: true
        },
        done: {
            type: Boolean
        }
    });

    return db.model("todo", todo);
};