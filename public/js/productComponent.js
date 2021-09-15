Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="products">
                <product v-for="item of products"
                :key="item.id_product"
                :img="img"
                :product="item"></product>
            </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="product-item">
                <img :src="product.img" alt="Some img" width="260" height="250">
                <div class="desc">
                    <h3 class="product_title">{{product.product_name}}</h3>
                    <p class="product_price">{{product.price}} р.</p>
                    <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
                </div>
            </div>`
});

