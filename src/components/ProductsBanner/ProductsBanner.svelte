<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems, addToCart, removeFromCart, DeleteCart } from '../../cart';
	import LazyImg from '$lib/Lazy/lazyImg.svelte';
	export let product: Product 
	let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
	// id: "1"
	let cartItemIndex = cart.findIndex((item) => {
		return item.id === product.id;
	});
	let cartProduct = cart[cartItemIndex];
	let price=product.price;
	let totalPrice: number = cartProduct ? cartProduct.quantity * product.price : 0;
	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartItemIndex = cart.findIndex((item) => {
			return item.id === product.id;
		});
		cartProduct = cart[cartItemIndex];
		totalPrice = cartProduct ? cartProduct.quantity * product.price : 0;
	});
</script>
{#if product.images && product.id && product.title && product.price}

<div>
	<a href={`/product/${product.id}`}>
    <header ><h2>{product.title}</h2></header>
</a>
	<a href={`/product/${product.id}`}>
		<LazyImg class="img"  alt={product.title} src={product.images[0]} width="200px"
		height="200px"/>
	</a>
    {#if cartProduct !== undefined}
        <div >
            Số lượng: <strong>{cartProduct.quantity}</strong>
        </div>
    {/if}
    <div>
        Giá: ${product.price}
    </div>
    <footer >
        <a href={`/product/${product.id}`}>Mua ngay</a>
    </footer>
</div>
{/if}


