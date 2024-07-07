<script>
    export let infoBarHeight = "350px";
    export let index = 0;
    let yPosition = `${index * 10}em`;
</script>

<div class="h-[600px] flex">
    <div class="bg-white flex p-4 rounded-lg mt-4 relative" style="width: {infoBarHeight}; top: {yPosition};">
        <div class="h-full w-full bg-gray-800 self-center">
            <slot />
        </div>
    </div>
</div>
