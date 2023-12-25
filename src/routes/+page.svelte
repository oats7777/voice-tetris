<script lang="ts">
  import { onMount } from 'svelte';
  import TetrisBoard from '$lib/services/tetrisBroad';
  let canvas: HTMLCanvasElement;

  onMount(() => {
    if (canvas) {
      const tetrisBroad = new TetrisBoard(canvas);
      tetrisBroad.drawBoard();
    }
  });
</script>

<div class="container mx-auto flex justify-center">
  <canvas class="" bind:this={canvas}></canvas>
</div>

<style>
</style>
