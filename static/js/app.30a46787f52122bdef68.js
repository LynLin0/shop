﻿webpackJsonp([1],{NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});s("/JRm");var a=s("HsqT"),e={name:"App",data:function(){return{currCategoryIndex:0,categories:[],toBuyMap:{},isShowShoppingCartList:!1,toBuyCountSum:0,toBuyAmount:0}},created:function(){this.init()},methods:{init:function(){this.categories=this.genCategories()},genCategories:function(){for(var t=[],i=0;i<20;i++)t.push({id:i,name:"分类"+i,goodsArray:this.genGoodsArray(i)});return t},genGoodsArray:function(t){for(var i=[],s=Math.floor(20*Math.random()),a=0;a<s;a++)i.push({id:t+"-"+a,name:"商品"+a,monthlySales:"28",price:28,originalPrice:28,pic:"/static/goods-pic.png",toBuyCount:0,categotryId:t});return i},toggleShoppingCartList:function(){this.isShowShoppingCartList=!this.isShowShoppingCartList},deleteAll:function(){for(var t in this.toBuyMap)this.toBuyMap[t].toBuyCount=0;this.toBuyMap={},this.toBuyCountSum=0,this.toBuyAmount=0},handleCategoryClick:function(t){"categories__item"===t.target.className&&(this.currCategoryIndex=Number(t.target.dataset.index))},handleShoppingCartClick:function(t){"shopping-cart__list__item__operate__plus"===t.target.className?this.plus(this.toBuyMap[t.target.dataset.id]):"shopping-cart__list__item__operate__minus"===t.target.className&&this.minus(this.toBuyMap[t.target.dataset.id])},plus:function(t){t.toBuyCount++,this.toBuyCountSum++,this.toBuyAmount+=t.price,this.toBuyMap[t.id]||(this.toBuyMap[t.id]=t)},minus:function(t){t.toBuyCount>0&&(this.toBuyAmount-=t.price,t.toBuyCount--,this.toBuyCountSum--);var i=this.toBuyMap[t.id];i&&0===i.toBuyCount&&delete this.toBuyMap[i.id]},handleGoodsClick:function(t){if("goods__item__operate__plus"===t.target.className){var i=this.categories[this.currCategoryIndex].goodsArray[t.target.dataset.index];this.plus(i)}else if("goods__item__operate__minus"===t.target.className){var s=this.categories[this.currCategoryIndex].goodsArray[t.target.dataset.index];this.minus(s)}}}},o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[t._m(0),t._v(" "),s("div",{attrs:{id:"shelf"}},[s("div",{staticClass:"categories",on:{click:t.handleCategoryClick}},t._l(t.categories,function(i,a){return s("div",{key:i.id,staticClass:"categories__item",class:{"categories__item--selected":a===t.currCategoryIndex},attrs:{"data-index":a}},[t._v("\n        "+t._s(i.name)+"\n      ")])}),0),t._v(" "),s("div",{staticClass:"goods",on:{click:t.handleGoodsClick}},t._l(t.categories[t.currCategoryIndex].goodsArray,function(i,a){return s("div",{key:i.id,staticClass:"goods__item"},[s("img",{staticClass:"goods__item__pic",attrs:{src:i.pic}}),t._v(" "),s("div",{staticClass:"goods__item__name"},[t._v("\n          "+t._s(i.name)+"\n        ")]),t._v(" "),s("div",{staticClass:"goods__item__monthly-sales"},[t._v("\n          月售："+t._s(i.monthlySales)+"份\n        ")]),t._v(" "),s("div",{staticClass:"goods__item__price"},[s("span",{staticClass:"goods__item__price__unit"},[t._v("￥")]),t._v(t._s(i.price)+"\n        ")]),t._v(" "),s("div",{staticClass:"goods__item__original-price"},[s("span",[t._v("￥")]),t._v(t._s(i.originalPrice)+"\n        ")]),t._v(" "),s("div",{staticClass:"goods__item__operate"},[s("img",{staticClass:"goods__item__operate__minus",attrs:{"data-index":a,src:"/static/btn_reduce_normal@3x.png"}}),s("span",{staticClass:"goods__item__operate__count"},[t._v(t._s(i.toBuyCount))]),s("img",{staticClass:"goods__item__operate__plus",attrs:{"data-index":a,src:"/static/btn_add_normal@3x.png"}})])])}),0)]),t._v(" "),t.isShowShoppingCartList?s("div",{attrs:{id:"shopping-cart"}},[s("div",{attrs:{id:"shopping-cart__cover"},on:{click:t.toggleShoppingCartList}}),t._v(" "),s("div",{attrs:{id:"shopping-cart__list"},on:{click:t.handleShoppingCartClick}},[s("div",{attrs:{id:"shopping-cart__list__header"}},[s("span",{attrs:{id:"shopping-cart__list__header__tips"}},[t._v("已选商品")]),t._v(" "),s("span",{attrs:{id:"shopping-cart__list__header__delete-wrapper"},on:{click:t.deleteAll}},[s("img",{attrs:{id:"shopping-cart__list__header__delete",src:"/static/icon_delete@3x.png"}}),s("span",{attrs:{id:"shopping-cart__list__header__delete-tips"}},[t._v("清除")])])]),t._v(" "),t._l(t.toBuyMap,function(i,a){return s("div",{key:"to-buy"+a,staticClass:"shopping-cart__list__item"},[s("span",{staticClass:"shopping-cart__list__item__name"},[t._v(t._s(i.name))]),t._v(" "),s("div",{staticClass:"shopping-cart__list__item__operate"},[s("img",{staticClass:"shopping-cart__list__item__operate__minus",attrs:{src:"/static/btn_big_reduce@3x.png","data-id":i.id}}),s("span",{staticClass:"shopping-cart__list__item__operate__count"},[t._v(t._s(i.toBuyCount))]),s("img",{staticClass:"shopping-cart__list__item__operate__plus",attrs:{src:"/static/btn_big_add@3x.png","data-id":i.id}})])])})],2)]):t._e(),t._v(" "),s("div",{attrs:{id:"footer"}},[s("img",{attrs:{id:"footer__shopping-cart",src:"/static/icon_shoppingcart@3x.png"},on:{click:t.toggleShoppingCartList}}),t._v(" "),s("span",{attrs:{id:"footer__badge"}},[t._v(t._s(t.toBuyCountSum))]),t._v(" "),s("div",{attrs:{id:"footer__amount"}},[s("span",{attrs:{id:"footer__amount__unit"}},[t._v("￥")]),t._v(t._s(t.toBuyAmount))]),t._v(" "),s("button",{attrs:{id:"footer__submit"}},[t._v("提交订单")])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"header"}},[i("img",{attrs:{id:"header__logo",src:"static/icon_logo@3x.png"}}),this._v(" "),i("img",{attrs:{id:"header__toggle",src:"/static/btn_list@3x.png"}})])}]};var _=s("C7Lr")(e,o,!1,function(t){s("opxX")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:_},template:"<App/>"})},opxX:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.30a46787f52122bdef68.js.map