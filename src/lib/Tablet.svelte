<script>
  export let sentences = []
  export let name = ""

  import { getContext } from 'svelte';
	import TabletWord from './TabletWord.svelte';
  import { send, receive } from './transition.js';
</script>

<div
  class="tablet"
  in:receive={{ key: name }}
  out:send={{ key: name }}
>
  
  <div class="tablet-title">{name}</div>

  {#each sentences as sentence, i}
    <hr>
    <div class="tablet-number">{i + 1}:</div>
    
    {#each sentence as wordWithMatch}
      <TabletWord isHighlighted={wordWithMatch.isMatch} {...wordWithMatch.wordData} tense={wordWithMatch.tense}></TabletWord>
    {/each}

  {/each}

</div>

<style>
  .tablet {
    align-content: flex-start;
    flex-wrap: wrap;
    max-width: 250px;
    min-height: 300px;
    border-radius: 5px;
    padding: 15px;
    background-color: rgb(250, 250, 250);
  }

  .tablet-title {
    width: 100%;
    height: fit-content;
    text-align: center;
    font-size: smaller;
  }

  div.tablet-title {
    padding: 0 0 0 6px;
  }

  .tablet-number {
    padding: 2px 5px 0 0;
  }
</style>
