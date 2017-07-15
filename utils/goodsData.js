module.exports = { 
  carousel: [
    "/images/ad1.jpg",
    "/images/ad2.jpg",
    "/images/ad3.jpg"
  ],
  allclassfication: allclassfication,
  goodsList: allGoods, 
  classficationGoods: classficationGoods,
  goodsInfo: goodsInfo,
  newGoods: newGoods,//新品区    
  hotGoods: hotGoods,//热销区    
} 

function allGoods() { 
  var list = { 
    goods: [
        {
          "classification_id": 1,
          "goods_id": 1,
          "thumbnail": "/images/goods1.jpg",
          "goods_name": "凤梨酥新品上市，尝新价28.9，现在买三盒立减15元凤梨酥新品上市，尝新价28.9，现在买三盒立减15元",
          "goods_price": 28.9,
          "goods_imgs": ["/images/goods1.jpg", "/images/goods2.jpg"],
          "goods_description": "凤梨酥新品上市，尝新价29.9，现在买三盒立减15元",
          "goods_detail_img": ["/images/goods1.jpg", "/images/goods2.jpg"],
          "parameter":[
            {
              "parameter_name":"产地",
              "parameter_val":"广州"
            },
            {
              "parameter_name": "口味",
              "parameter_val": "甜"
            },
            {
              "parameter_name": "包装",
              "parameter_val": "袋"
            }
          ],
          "availSku": {
            "500g,普通包装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 30,
              "stockPrice": 28.9
            },
            "500g,礼盒装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 10,
              "stockPrice": 33.9
            },
            "600g,普通包装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 20,
              "stockPrice": 32.9
            },
            "600g,礼盒装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 40,
              "stockPrice": 37.9
            },
          },
          "sku": [{
            "pList": ["500g", "600g"],
            "pName": "规格"
          }, {
            "pList": ["普通包装", "礼盒装"],
            "pName": "包装"
          }],
          "stock": 100
        },
        {
          "classification_id": 2,
          "goods_id": 2,
          "thumbnail": "/images/goods1.jpg",
          "goods_name": "核桃酥",
          "goods_price": 26.9,
          "goods_imgs": ["/images/goods1.jpg", "/images/goods2.jpg"],
          "goods_description": "凤梨酥新品上市，尝新价29.9，现在买三盒立减15元",
          "goods_detail_img": ["/images/goods1.jpg", "/images/goods2.jpg"],
          "availSku": {
            "500g,普通包装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 30,
              "stockPrice": 26.9
            },
            "500g,礼盒装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 10,
              "stockPrice": 30.9
            },
            "600g,普通包装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 20,
              "stockPrice": 32.9
            },
            "600g,礼盒装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 40,
              "stockPrice": 36.9
            },
          },
          "sku": [{
            "pList": ["500g", "600g"],
            "pName": "规格"
          }, {
            "pList": ["普通包装", "礼盒装"],
            "pName": "包装"
          }],
          "stock": 100
        },{
          "classification_id": 3,
          "goods_id": 3,
          "thumbnail": "/images/goods2.jpg",
          "goods_name": "凤梨酥新品上市，尝新价28.9，现在买三盒立减15元",
          "goods_price": 28.9,
          "goods_imgs": ["/images/goods1.jpg", "/images/goods2.jpg"],
          "goods_description": "凤梨酥新品上市，尝新价29.9，现在买三盒立减15元",
          "goods_detail_img": ["/images/goods1.jpg", "/images/goods2.jpg"],
          "availSku": {
            "500g,普通包装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 30,
              "stockPrice": 28.9
            },
            "500g,礼盒装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 10,
              "stockPrice": 33.9
            },
            "600g,普通包装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 20,
              "stockPrice": 32.9
            },
            "600g,礼盒装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 40,
              "stockPrice": 37.9
            },
          },
          "sku": [{
            "pList": ["500g", "600g"],
            "pName": "规格"
          }, {
            "pList": ["普通包装", "礼盒装"],
            "pName": "包装"
          }],
          "stock": 100
        },
        {
          "classification_id": 4,
          "goods_id": 4,
          "thumbnail": "/images/goods1.jpg",
          "goods_name": "核桃酥",
          "goods_price": 26.9,
          "goods_imgs": ["/images/goods1.jpg", "/images/goods2.jpg"],
          "goods_description": "凤梨酥新品上市，尝新价29.9，现在买三盒立减15元",
          "goods_detail_img": ["/images/goods1.jpg", "/images/goods2.jpg"],
          "availSku": {
            "500g,普通包装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 30,
              "stockPrice": 26.9
            },
            "500g,礼盒装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 10,
              "stockPrice": 30.9
            },
            "600g,普通包装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 20,
              "stockPrice": 32.9
            },
            "600g,礼盒装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 40,
              "stockPrice": 36.9
            },
          },
          "sku": [{
            "pList": ["500g", "600g"],
            "pName": "规格"
          }, {
            "pList": ["普通包装", "礼盒装"],
            "pName": "包装"
          }],
          "stock": 100
        }, {
          "classification_id": 1,
          "goods_id": 5,
          "thumbnail": "/images/goods2.jpg",
          "goods_name": "凤梨酥新品上市，尝新价28.9，现在买三盒立减15元",
          "goods_price": 28.9,
          "goods_imgs": ["/images/goods1.jpg", "/images/goods2.jpg"],
          "goods_description": "凤梨酥新品上市，尝新价29.9，现在买三盒立减15元",
          "goods_detail_img": ["/images/goods1.jpg", "/images/goods2.jpg"],
          "availSku": {
            "500g,普通包装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 30,
              "stockPrice": 28.9
            },
            "500g,礼盒装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 10,
              "stockPrice": 33.9
            },
            "600g,普通包装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 20,
              "stockPrice": 32.9
            },
            "600g,礼盒装": {
              "skuSmallImg": "/images/goods1.jpg",
              "stockCount": 40,
              "stockPrice": 37.9
            },
          },
          "sku": [{
            "pList": ["500g", "600g"],
            "pName": "规格"
          }, {
            "pList": ["普通包装", "礼盒装"],
            "pName": "包装"
          }],
          "stock": 100
        }
    ] 
  } 
  return list; 
} 
function allclassfication() {
  var list = {
    classfication: [
      {
        "classfication_id": 1,
        "classfication_name": "坚果"
      },
      {
        "classfication_id": 2,
        "classfication_name": "糖果"
      },
      {
        "classfication_id": 3,
        "classfication_name": "饮品"
      },
      {
        "classfication_id": 4,
        "classfication_name": "饼干"
      },
      {
        "classfication_id": 5,
        "classfication_name": "新品"
      },
      {
        "classfication_id": 6,
        "classfication_name": "热销"
      }
    ]
  }
  return list;
}

var goods_list = allGoods()
// 分类：根据传过来的分类ID获取商品列表
function classficationGoods(id) {
  var result = [];
  for (let i = 0; i < goods_list.goods.length; i++) {
    if (goods_list.goods[i].classification_id == id) {
      result.push(goods_list.goods[i]);
    }
  }
  return result || {}
}

//商品：根据传过来的商品ID获得商品信息
function goodsInfo(id) {
  var result = [];
  for (let i = 0; i < goods_list.goods.length; i++) {
    if (goods_list.goods[i].goods_id == id) {
      result = goods_list.goods[i];
    }
  }
  return result || {}
}

//新品：获取最新的四个
function newGoods(){
  var result = [];
  var goodsLength = goods_list.goods.length;
  var start;
  if(goodsLength>4){
    start=goodsLength-4;
    console.log(start);
  }else{
    start=0;
    console.log(start);
  }
  for (var i = start; i < goodsLength;i++) {
      result.push(goods_list.goods[i]);
  }
  return result || {}
}

//热销：获取前面的四个
function hotGoods() {
  var result = [];
  var goodsLength = goods_list.goods.length;
  var end;
  if (goodsLength > 4) {
    end = 4;

  } else {
    end = goodsLength;
  }
  for (var i = 0; i < end; i++) {
    result.push(goods_list.goods[i]);
  }
  return result || {}
}