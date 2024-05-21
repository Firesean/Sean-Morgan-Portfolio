<script>
  export let company = "";
  export let title = "";
  export let length = "";
  export let descriptions = [];
</script>

<div class="relative w-full hover:z-20">
  <div class="h-[30em]">
    <div class="w-full h-[30em]">
      <div class="group bg-gray-500 w-[30vh] h-[12vh] overflow-hidden flex justify-center items-center transition-all duration-300 hover:h-[40vh] hover:bg-gray-300 rounded-md opacity-80 mx-auto">
        <div class="relative w-full h-full flex justify-center items-center transition-all duration-300 group-hover:scale-100 scale-[0.5]">
          <slot />
          <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-900 bg-opacity-85 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 gap-2">
            <h1 class="font-semibold text-md lg:text-xl xl:text-2xl text-wrap text-center self-center">{company}</h1>
            <h2 class="font-semibold text-sm lg:text-lg xl:text-xl text-wrap text-center self-center text-yellow-400">{title}</h2>
            <h3 class="font-semibold text-xs lg:text-md xl:text-lg self-start">{length}</h3>
            <ul class="flex flex-wrap text-wrap justify-start self-start gap-4 text-xs lg:text-sm xl:text-md p-2">
              {#each descriptions as description}
                <li>• {description}</li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>