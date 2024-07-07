<script>
    export let infoBarHeight;
    export let title;
    export let attachedSide = "left";
</script>


<div class="flex flex-col {attachedSide == "left" ? "items-start self-start" : "items-end self-end"} w-full">
    <div class="flex flex-col {attachedSide == "left" ? "justify-start" : "justify-end"} w-[80%]">
        <h2 class="{attachedSide == "left" ? "self-end" : "self-start"}">{title}</h2>
        <div class="bg-white flex w-full p-4 {attachedSide == "left" ? "pl-0" : "pr-0"} rounded-lg relative right-0" style="height: {infoBarHeight};">
            <div class="h-full bg-gray-800 self-center w-full break-words">
                <slot />
            </div>
        </div>
    </div>
</div>