const mongoose = require('mongoose'),
    UserModel = require('@PlateModels/user');
const models = {
    User: mongoose.model('User')
}
module.exports = models;