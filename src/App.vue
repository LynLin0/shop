<style>
body {
  margin: 0px;
}
#shop {
  position: relative;
}
#header {
  height: 120px;
  border-bottom: 1px solid #f8f8f8;
  background-color: white;
  position: relative;
  box-sizing: border-box;
}

#header__logo {
  width: 162px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
}
#header__toggle {
  width: 44px;
  height: 44px;
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
}
#shelf {
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 100px;
  overflow: hidden;
}
.categories {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
}

.categories::-webkit-scrollbar { width: 0 !important }

.categories__item {
  width: 200px;
  height: 100px;
  background-color: #f8f8f8;
  line-height: 100px;
  padding-left: 24px;
  box-sizing: border-box;
  font-size: 26px;
  color: #555555;
}

.categories__item--selected {
  background-color: white;
}
.goods {
  position: absolute;
  left: 200px;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
}

.goods::-webkit-scrollbar { width: 0 !important }
.goods__item {
  position: relative;
  height: 200px;
}
.goods__item__pic {
  position: absolute;
  width: 138px;
  height: 138px;
  top: 30px;
  left: 30px;
}
.goods__item__name {
  color: #36383a;
  position: absolute;
  left: 178px;
  top: 32px;
  font-size: 26px;
  line-height: 26px;
}
.goods__item__monthly-sales {
  position: absolute;
  left: 178px;
  top: 90px;
  font-size: 20px;
  line-height: 20px;
  color: #555555;
}

.goods__item__price {
  position: absolute;
  left: 178px;
  top: 136px;
  font-size: 26px;
  line-height: 26px;
  color: #2c4d99;
  font-weight: bold;
}

.goods__item__price__unit {
  font-size: 18px;
}

.goods__item__original-price {
  position: absolute;
  left: 248px;
  top: 142px;
  font-size: 18px;
  line-height: 18px;
  color: #bfbfbf;
  text-decoration: line-through;
}

.goods__item__original-price {
  position: absolute;
  left: 248px;
  top: 142px;
  font-size: 18px;
  line-height: 18px;
  color: #bfbfbf;
  text-decoration: line-through;
}
.goods__item__operate {
  position: absolute;
  right: 24px;
  top: 134px;
  display: flex;
}
.goods__item__operate__minus {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
}
.goods__item__operate__count {
  font-size: 24px;
  line-height: 32px;
  height: 32px;
  width: 70px;
  text-align: center;
  display: inline-block;
}
.goods__item__operate__plus {
  width: 32px;
  height: 32px;
  vertical-align: bottom;
}
#footer {
  position: absolute;
  height: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #f5f5f5;
  box-sizing: border-box;
}
#footer__shopping-cart {
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  left: 32px;
  transform: translateY(-50%);
}

#shopping-cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100px;
  top: 0;
}

#shopping-cart__cover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 0.58;
}

#shopping-cart__list {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 440px;
  background: white;
}

#shopping-cart__list__header {
  position: relative;
  height: 86px;
  background: #f9f9f9;
}

#shopping-cart__list__header__tips {
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
  color: #818181;
  font-size: 30px;
  line-height: 30px;
}

#shopping-cart__list__header__delete-wrapper {
  float: right;
  height: 86px;
  line-height: 86px;
  margin-right: 24px;
  display: flex;
  align-items: center;
}

#shopping-cart__list__header__delete {
  width: 30px;
  height: 30px;
  margin-right: 24px;
  display: inline-block;
  vertical-align: middle;
}

#shopping-cart__list__header__delete-tips {
  font-size: 24px;
  color: #818181;
  display: inline-block;
  vertical-align: middle;
}

.shopping-cart__list__item {
  height: 94px;
  display: flex;
  align-items: center;
}

.shopping-cart__list__item__name {
  flex-grow: 1;
  margin-left: 24px;
  font-size: 26px;
  color: #555555;
}

.shopping-cart__list__item__operate {
  display: flex;
  margin-right: 24px;
}

.shopping-cart__list__item__operate__minus {
  width: 40px;
  height: 40px;
}

.shopping-cart__list__item__operate__count {
  width: 90px;
  line-height: 40px;
  height: 40px;
  font-size: 26px;
  display: inline-block;
  text-align: center;
  color: #555555;
}

.shopping-cart__list__item__operate__plus {
  width: 40px;
  height: 40px;
}

#footer__badge {
  position: absolute;
  left: 84px;
  top: 14px;
  padding: 0px 6px;
  transform: translateX(-50%);
  border-radius: 14px;
  border-width: 14px;
  background: #2c4d99;
  display: inline-block;
  height: 30px;
  min-width: 30px;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  color: white;
  box-sizing: border-box;
}
#footer__amount {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 291px;
  font-size: 30px;
  color: #2c4d99;
  font-weight: bold;
}
#footer__amount__unit {
  font-size: 22px;
}
#footer__submit {
  position: absolute;
  right: 0;
  width: 250px;
  height: 100px;
  top: 0;
  background: #2c4d99;
  border: none;
  color: white;
  font-size: 34px;
}
</style>
<template>
  <div>
    <div id="header">
      <img
        id="header__logo"
        src="static/icon_logo@3x.png"
      />
      <img
        id="header__toggle"
        src="static/btn_list@3x.png"
      />
    </div>
    <div id="shelf">
      <div
        class="categories"
        @click="handleCategoryClick"
      >
        <div
          class="categories__item"
          :class="{'categories__item--selected': categoryIndex === currCategoryIndex}"
          v-for="(category, categoryIndex) in categories"
          v-bind:key="category.id"
          :data-index="categoryIndex"
        >
          {{category.name}}
        </div>
      </div>
      <div
        class="goods"
        @click="handleGoodsClick"
      >
        <div
          class="goods__item"
          v-for="(goods,goodsIndex) in categories[currCategoryIndex].goodsArray"
          v-bind:key="goods.id"
        >
          <img
            class="goods__item__pic"
            :src="goods.pic"
          />
          <div class="goods__item__name">
            {{goods.name}}
          </div>
          <div class="goods__item__monthly-sales">
            月售：{{goods.monthlySales}}份
          </div>
          <div class="goods__item__price">
            <span class="goods__item__price__unit">￥</span>{{goods.price}}
          </div>
          <div class="goods__item__original-price">
            <span>￥</span>{{goods.originalPrice}}
          </div>
          <div class="goods__item__operate">
            <img
              class="goods__item__operate__minus"
              :data-index="goodsIndex"
              src="static/btn_reduce_normal@3x.png"
            /><span class="goods__item__operate__count">{{goods.toBuyCount}}</span><img
              class="goods__item__operate__plus"
              :data-index="goodsIndex"
              src="static/btn_add_normal@3x.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      id="shopping-cart"
      v-if="isShowShoppingCartList"
    >
      <div
        id="shopping-cart__cover"
        @click="toggleShoppingCartList"
      ></div>
      <div
        id="shopping-cart__list"
        @click="handleShoppingCartClick"
      >
        <div id=shopping-cart__list__header>
          <span id="shopping-cart__list__header__tips">已选商品</span>
          <span
            id="shopping-cart__list__header__delete-wrapper"
            @click="deleteAll"
          >
            <img
              id="shopping-cart__list__header__delete"
              src="static/icon_delete@3x.png"
            /><span id="shopping-cart__list__header__delete-tips">清除</span>
          </span>
        </div>
        <div
          class="shopping-cart__list__item"
          v-for="(toBuy,index) in toBuyMap"
          :key="'to-buy'+index"
        >
          <span class="shopping-cart__list__item__name">{{toBuy.name}}</span>
          <div class="shopping-cart__list__item__operate">
            <img
              class="shopping-cart__list__item__operate__minus"
              src="static/btn_big_reduce@3x.png"
              :data-id="toBuy.id"
            /><span class="shopping-cart__list__item__operate__count">{{toBuy.toBuyCount}}</span><img
              class="shopping-cart__list__item__operate__plus"
              src="static/btn_big_add@3x.png"
              :data-id="toBuy.id"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
      <img
        id="footer__shopping-cart"
        src="static/icon_shoppingcart@3x.png"
        @click="toggleShoppingCartList"
      />
      <span id="footer__badge">{{toBuyCountSum}}</span>
      <div id="footer__amount"><span id="footer__amount__unit">￥</span>{{toBuyAmount}}</div>
      <button id="footer__submit">提交订单</button>
    </div>
  </div>
</template>
<script>
const CATEGORY_COUNT = 20
const GOODS_COUNT = 20
export default {
  name: 'App',
  data () {
    return {
      currCategoryIndex: 0,
      categories: [],
      toBuyMap: {},
      isShowShoppingCartList: false,
      toBuyCountSum: 0,
      toBuyAmount: 0
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.categories = this.genCategories()
    },
    genCategories () {
      const res = []
      for (let i = 0; i < CATEGORY_COUNT; i++) {
        res.push({
          id: i,
          name: '分类' + i,
          goodsArray: this.genGoodsArray(i)
        })
      }
      return res
    },
    genGoodsArray (categoryId) {
      const res = []
      let count = Math.floor(Math.random() * GOODS_COUNT)
      for (let i = 0; i < count; i++) {
        res.push({
          id: categoryId + '-' + i,
          name: '商品' + i,
          monthlySales: '28',
          price: 28,
          originalPrice: 28,
          pic: 'static/goods-pic.png',
          toBuyCount: 0,
          categotryId: categoryId
        })
      }
      return res
    },
    toggleShoppingCartList () {
      this.isShowShoppingCartList = !this.isShowShoppingCartList
    },
    deleteAll () {
      for (let key in this.toBuyMap) {
        this.toBuyMap[key].toBuyCount = 0
      }
      this.toBuyMap = {}
      this.toBuyCountSum = 0
      this.toBuyAmount = 0
    },
    handleCategoryClick (event) {
      if (event.target.className === 'categories__item') {
        this.currCategoryIndex = Number(event.target.dataset.index)
      }
    },
    handleShoppingCartClick (event) {
      if (event.target.className === 'shopping-cart__list__item__operate__plus') {
        this.plus(this.toBuyMap[event.target.dataset.id])
      } else if (event.target.className === 'shopping-cart__list__item__operate__minus') {
        this.minus(this.toBuyMap[event.target.dataset.id])
      }
    },
    plus (plusItem) {
      plusItem.toBuyCount++
      this.toBuyCountSum++
      this.toBuyAmount += plusItem.price
      const plusItemInMap = this.toBuyMap[plusItem.id]
      if (!plusItemInMap) {
        this.toBuyMap[plusItem.id] = plusItem
      }
    },
    minus (minusItem) {
      if (minusItem.toBuyCount > 0) {
        this.toBuyAmount -= minusItem.price
        minusItem.toBuyCount--
        this.toBuyCountSum--
      }
      const minusItemInMap = this.toBuyMap[minusItem.id]
      if (minusItemInMap && minusItemInMap.toBuyCount === 0) {
        delete this.toBuyMap[minusItemInMap.id]
      }
    },
    handleGoodsClick (event) {
      if (event.target.className === 'goods__item__operate__plus') {
        const plusItem = this.categories[this.currCategoryIndex].goodsArray[event.target.dataset.index]
        this.plus(plusItem)
      } else if (event.target.className === 'goods__item__operate__minus') {
        const minusItem = this.categories[this.currCategoryIndex].goodsArray[event.target.dataset.index]
        this.minus(minusItem)
      }
    }
  }
}
</script>
