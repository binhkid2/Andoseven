<style>
    img.lazy {
        opacity: 0.95;
        transition: opacity 1200ms ease-out;
    }
    img:not(.initial) {
        transition: opacity 1s;
    }
    img.initial,
    img.loaded,
    img.error {
        opacity: 1;
    }
    
    img:not([src]) {
        visibility: hidden;
    }
    </style>
    
    <script lang="ts">
    import { browser } from '$app/environment'
    import { onDestroy } from 'svelte'
    import { onMount } from 'svelte'
    import lazyload from 'vanilla-lazyload'
    import { fade } from 'svelte/transition'
    export let alt = ''
    export let aspect_ratio = '3:4'
    export let height = 'auto'
    export let width = 'auto'
    export let src:string;
    let clazz: string
    export { clazz as class }
    
    const h = height === 'auto' ? 'auto' : +height * 2
    const w = width === 'auto' ? 'auto' : +width * 2
    
    let lazyloadInstance: any
 
    
    onMount(() => {
        if (browser) {
            lazyloadInstance = new lazyload({
                thresholds: '50px 10%'
            })
        }
    })
    
    onDestroy(() => {
        if (lazyloadInstance) lazyloadInstance.destroy()
    })
    </script>
    
    <img
        alt="{alt}"
        class="aspect-[{aspect_ratio.split(':')[0]}/{aspect_ratio.split(':')[1]}] lazy {clazz}"
        in:fade="{{ duration: 1000 }}"
        width="{w}"
        height="{h}"
        src= {src} />

<!-- Example
        <LazyImg
        src="https://images.unsplash.com/photo-1683476448574-3f82395a03f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                    alt="banner"
                    width="1500"
                    height="380"
                    class="h-full w-full object-contain object-center" />
                    -->