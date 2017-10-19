var vue = new Vue({
    el: '#container',
    data: {
        totalMoney: 0,
        productList: [],
        productQuantity: '',
        checkAllFlag: false,
    },
    mounted: function () {
        this.$nextTick(function () {
            this.cartView();
        });
    },
    filters: {
        formatMoney: function (value) {
            return "¥" + value.toFixed(2);
        }
    },
    methods: {
        cartView: function () {
            var _this = this;
            this.$http.get('./data/cartData.json').then(function (res) {
                _this.productList = res.body.result.list;
            })
        },
        changeQuantity: function (product, way) {
            if (way > 0) {
                product.productQuantity++;
            } else {
                product.productQuantity--;
                if (product.productQuantity < 1) {
                    product.productQuantity = 1;
                }
            }
        },
        selectedProduct: function (item) {
            if (typeof item.checked == "undefined") {
                this.$set(item, "checked", true)
            }
            else {
                item.checked = !item.checked;
            }
            this.calcTotalPrice();
        },
        calcTotalPrice: function (item) {
            var _this = this;
            this.totalMoney = 0;
            this.productList.forEach(function (item, index) {
                if (item.checked) {
                    _this.totalMoney += item.productPrice * item.productQuantity;
                }
            });       
        }
     
        }
})
// 全局过滤器
Vue.filter('money', function (value, type) {
    return "¥" + value.toFixed(2) + type;
})