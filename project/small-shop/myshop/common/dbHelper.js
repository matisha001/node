//由Schema构造生成的模型，具有数据库操作的行为。
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    models = require('./models');

for (var m in models) {
    mongoose.model(m, new Schema(models[m]));
}
module.exports = {
    getModel: function (type) {
        return _getModel(type);
    }
};//通过getModel可获取集合的Model模型,就可以对数据库有实质性的操作

var _getModel = function (type) {
    return mongoose.model(type);
};


