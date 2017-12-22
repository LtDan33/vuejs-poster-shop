new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [
            {
                title: "item1",
                qty: 0,
                price: 5.99
            },
            {
                title: "item2",
                qty: 0,
                price: 10.99
            },
            {
                title: "item3",
                qty: 0,
                price: 15.99
            }
        ],
        cart: []
    },
    methods: {
        onSubmit: function (){
            console.log("Submited");
        },
        addItem: function (index, price) {
            this.total += price;
            var item = this.items[index];

            found = false;

            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i].title == item.title) {
                    found = true;
                    this.cart[i].qty++;
                    break;
                }
            }

            if (!found) {
                this.cart.push({
                    title: item.title,
                    qty: 1,
                    price: item.price
                });
            }
        },
        removeItem: function (index) {
            this.total -= price;
            this.cart.removeItem(this.items[index]);
            console.log(this.cart.length)
        },

        inc: function (item) {
            item.qty++;
            this.total += item.price;
        },
        dec: function (item) {

            item.qty--;
            this.total -= item.price;

            if (item.qty <= 0) {
                for (var i = 0; i < this.cart.length; i++) {
                    if (this.cart[i].title == item.title) {
                        this.cart.splice(i, 1);
                        break;
                    }
                }

            }
        }
    },
    filters: {
        currency: function (price) {
            return '$'.concat(price.toFixed(2));
        }
    }

});