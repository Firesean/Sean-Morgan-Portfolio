<script>
    import AttachedBar from "$lib/components/utility/attached-bar.svelte";

    let infoBarHeight = "350px";
    let sections = ["Introduction", "Education", "Professional Summary", "Interests", "Self Development"];
</script>


<div class="w-full flex flex-col gap-16">
    <AttachedBar infoBarHeight={infoBarHeight} title="Introduction">
        test
    </AttachedBar>

    <AttachedBar infoBarHeight={infoBarHeight} title="Education" attachedSide="right">
        test
    </AttachedBar>
</div>
