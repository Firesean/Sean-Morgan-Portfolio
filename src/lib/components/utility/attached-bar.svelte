<script>
    export let infoBarHeight;
    export let title;
    export let attachedSide = "left";

    import WelcomeSignIcon from "$lib/components/icons/welcome-sign-icon.svelte";
</script>

<div class="flex flex-col {attachedSide == "left" ? "items-start self-start" : "items-end self-end"} w-full min-w-[400px]" style="font-size: clamp(.85em, 1.5vw, 2em);">
    <div class="flex flex-col {attachedSide == "left" ? "justify-start" : "justify-end"} w-[80%]">
        <h2 class="{attachedSide == "left" ? "self-end pr-4" : "self-start pl-4"}">{title}</h2>
        <div class="attached-bar-outer flex w-full p-4 {attachedSide == "left" ? "pl-0" : "pr-0"} rounded-lg relative right-0" style="height: {infoBarHeight};">
            <div class="h-full attached-bar-inner self-center w-full break-words flex overflow-hidden {attachedSide == "left" ? "flex-row" : "flex-row-reverse"}">
                <div class="flex flex-col flex-wrap w-full gap-4 justify-center items-center {attachedSide == "left" ? "-rotate-6 -translate-x-6" : "rotate-6 translate-x-6"}">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</div>