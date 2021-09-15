Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `
        	    <div class="modal-window" v-show="visibility">
                    <cart-item v-for="item of cartItems" :key="item.product_id" :img="img" :cart-item="item">
                    </cart-item>
                </div>
            `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
                <div class="cart-item">
                    <div class="product-bio">
                        <img :src="cartItem.img" alt="Some img" width="210" height="200">
                        <div class="product-desc">
                            <div class="product-title">{{ cartItem.product_name }}</div>
                            <div class="product-quantity">Количество: {{ cartItem.quantity }} шт</div>
                            <div class="single-price">Цена: {{ cartItem.price }} р.</div>
                            <div class="product-price">Общая цена: {{cartItem.quantity*cartItem.price}} р.</div>
                        </div>
                        <div class="right-block"> 
                            <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
                        </div>
                    </div>
                </div>
            `
});



