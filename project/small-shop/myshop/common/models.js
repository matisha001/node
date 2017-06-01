
module.exports = {
    user: {//用户
        name: { type: String, required: true },
        gender: { type: Boolean, default: true },
        password: { type: String, required: true }
    },
    commodity: {//商品
        name: String,
        price: Number,
        imgSrc: String
    },
    cart:{//购物车
        uId: { type: String },//用户ID
        cId: { type: String },//商品ID
        cName: { type: String },//商品名称
        cPrice: { type: String },//商品价格
        cImgSrc: { type:String } ,//商品图片
        cQuantity: { type: Number },//商品数量
        cStatus : { type: Boolean, default: false  }//结算状态，false为未结算，true为已结算
    }
};
