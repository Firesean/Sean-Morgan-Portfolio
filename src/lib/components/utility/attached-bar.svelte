<script>
    export let infoBarHeight;
    export let title;
    export let attachedSide = "left";
</script>


<div class="flex flex-col {attachedSide == "left" ? "items-start self-start" : "items-end self-end"} w-full" style="font-size: clamp(.6em, 2vw, 1.5em);">
    <div class="flex flex-col {attachedSide == "left" ? "justify-start" : "justify-end"} w-[80%]">
        <h2 class="{attachedSide == "left" ? "self-end pr-4" : "self-start pl-4"}">{title}</h2>
        <div class="attached-bar-outer flex w-full p-4 {attachedSide == "left" ? "pl-0" : "pr-0"} rounded-lg relative right-0" style="height: {infoBarHeight};">
            <div class="h-full attached-bar-inner self-center w-full break-words flex {attachedSide == "left" ? "justify-end text-right" : "justify-start text-left"} p-4 overflow-hidden">
                <div class="flex flex-col flex-wrap w-full gap-4 justify-between">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</div>