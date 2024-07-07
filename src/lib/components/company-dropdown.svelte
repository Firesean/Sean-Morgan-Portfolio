<script>
  export let company = "";
  export let title = "";
  export let length = "";
  export let descriptions = [];
</script>

<div class="relative w-full overflow-visible select-none" draggable="false">
  <div class="group relative w-[300px] h-[120px] bg-gray-500 rounded-md opacity-80 hover:opacity-100 transition-all duration-300 hover:z-20">
    <div class="overflow-hidden relative w-full h-full flex justify-center items-center transition-all duration-300 group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:w-[300px] group-hover:h-[360px] group-hover:bg-gray-300 group-hover:overflow-visible rounded-md">
      <div class="hover:overflow-hidden relative w-full h-full flex justify-center items-center transition-transform duration-300 scale-[0.5] group-hover:scale-100">
        <slot />
        <div class="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-85 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4 gap-1 text-container">
          <h1 class="font-semibold text-center text-company">{company}</h1>
          <h2 class="font-semibold text-center text-title text-yellow-400">{title}</h2>
          <h3 class="font-semibold self-start text-length">{length}</h3>
          <ul class="flex flex-wrap justify-start gap-1 p-2 text-description">
            {#each descriptions as description}
              <li>• {description}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .text-container {
    font-size: clamp(0.9rem, 1vw, 1.5rem);
  }

  .text-company {
    font-size: clamp(1rem, 1vw, 1.5rem);
  }

  .text-title {
    font-size: clamp(0.9rem, 1vw, 0.95rem);
  }

  .text-length {
    font-size: clamp(0.7rem, 1vw, 0.9rem);
  }

  .text-description {
    font-size: clamp(.9rem, 1vw, 0.9rem);
  }
</style>
