<script>
  import { onMount } from 'svelte';
  import SunIcon from "$lib/components/icons/sun-icon.svelte";
  import PythonIcon from "$lib/components/icons/python-icon.svelte";
  import SvelteIcon from "$lib/components/icons/svelte-icon.svelte";
  import CPPIcon from "$lib/components/icons/cpp-icon.svelte";
  import NodeJSIcon from "$lib/components/icons/nodejs-icon.svelte";
  import SeleniumLogo from '$lib/components/icons/selenium-logo.svelte';
  import GithubLogo from '$lib/components/icons/github-logo.svelte';
  import TailwindCSSLogo from '$lib/components/icons/tailwindcss-logo.svelte';
  import SQLLogo from '$lib/components/icons/sql-logo.svelte';







  // Define the icons array
  let icons = [
    { component: PythonIcon, id: 'python', size: 100 },
    { component: SvelteIcon, id: 'svelte', size: 100 },
    { component: CPPIcon, id: 'c++', size: 100 },
    { component: NodeJSIcon, id: 'node.js', size: 100 },
    { component: SeleniumLogo, id: 'selenium', size: 100 },
    { component: GithubLogo, id: 'github', size: 100 },
    { component: TailwindCSSLogo, id: 'tailwindcss', size: 100 },
    { component: SQLLogo, id: 'SQL', size: 100 },
  ];

  let containerWidth = 0;
  let containerHeight = 0;

  // Store each icon's state (position and speed)
  let iconStates = [];

  onMount(() => {
    const container = document.querySelector('.bouncing-container');
    containerWidth = container.clientWidth;
    containerHeight = container.clientHeight;

    // Initialize state for each icon
    iconStates = icons.map(icon => ({
      x: Math.random() * containerWidth,
      y: Math.random() * containerHeight,
      speedX: (Math.random() - 0.5) * 3 + 2,
      speedY: (Math.random() - 0.5) * 3 + 2,
      size: icon.size,
    }));

    startAnimation();
    window.addEventListener('resize', updateContainerSize);
  });

  function updateContainerSize() {
    const container = document.querySelector('.bouncing-container');
    containerWidth = container.clientWidth;
    containerHeight = container.clientHeight;
  }

  function startAnimation() {
    function animate() {
      iconStates = iconStates.map((state, index) => {
        let { x, y, speedX, speedY, size } = state;

        // Update positions
        x += speedX;
        y += speedY;

        // Handle collisions with container boundaries
        if (x <= 0 || x >= containerWidth - size) {
          x = Math.max(0, Math.min(x, containerWidth - size));
          speedX *= -1;
        }
        if (y <= 0 || y >= containerHeight - size) {
          y = Math.max(0, Math.min(y, containerHeight - size));
          speedY *= -1;
        }

        return { x, y, speedX, speedY, size };
      });

      requestAnimationFrame(animate);
    }

    animate();
  }
</script>

<style>
  .bouncing-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .icon {
    position: absolute;
  }
</style>

<div class="bouncing-container">
  {#each icons as { component, id, size }, index}
    <div
      class="icon"
      style="transform: translate({iconStates[index]?.x || 0}px, {iconStates[index]?.y || 0}px);"
    >
      <!-- Pass size to the component -->
      <svelte:component this={component} size={size} />
    </div>
  {/each}
</div>
