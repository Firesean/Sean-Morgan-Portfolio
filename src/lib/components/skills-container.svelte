<script>
    export let infoBarHeight = "20em";
    export let index = 0;
    export let inColumn = 4;

    let yPosition = `${(index % inColumn) * 10}em`;

    $: yPosition = `${(index % inColumn) * 10}em`;
</script>

<div class="h-[600px] flex">
    <div class="skill-container-outer flex p-4 rounded-lg mt-4 relative" style="width: {infoBarHeight}; top: {yPosition};">
        <div class="h-full w-full skill-container-inner self-center">
            <slot />
        </div>
    </div>
</div>
