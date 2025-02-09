<script>
    export let size = 20;
    $: sizePx = `${size}px`;
</script>

<style>
    #vercel {
        background-color: black;
        padding : .4em;
        border-radius: 100%;
    }
</style>

<div id="vercel">
    <svg aria-label="Vercel Logo" fill="#FFF" viewBox="0 0 75 65" width={sizePx} height={sizePx}>
        <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
    </svg>
</div>