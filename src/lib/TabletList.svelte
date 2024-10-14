<script>
  import Tablet from "./Tablet.svelte";
  import { flip } from 'svelte/animate';
  
  export let tablets

  $: visibleTablets = tablets.filter((tablet) => { return tablet.visible } )

</script>

<div>
  <div class="tabletContainer">
    {#each visibleTablets as tabletData (tabletData.name)}
    <div animate:flip={{ duration: 200 }}>
      <Tablet
        name={tabletData.name}
        sentences={tabletData.sentences}
      >
      </Tablet>
    </div>
    {/each}

  </div>
</div>

<style>
  .tabletContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    column-gap: 20px;
    row-gap: 10px;
    width: 75%
  }
</style>
