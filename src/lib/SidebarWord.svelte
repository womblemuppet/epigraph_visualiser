<script>
  export let nari;
  export let english;
  export let english_tense_1;
  export let english_tense_2;
  export let english_tense_3;
  export let english_tense_4;

  import { query } from '../stores.js'

  function onClick() {
    query.set(nari)
  }

</script>

<button on:click={onClick}>
  <span class="nari">{nari}</span><span class="english">{english || "            " }</span>
</button>

<style>
  button {
    padding: 10px;
    width: 90%;
    height: 50px;

    display: flex;
    justify-content: space-between;

    background-color: var(--element-colour-weak-1);

    border-bottom: none;
    border-left: none;

    border-top-color: rgb(226, 226, 226);
    border-top-width: 2px;

    border-right-color: rgb(165, 165, 165);
    border-right-width: 1px;
    
    white-space: pre;
  }

  button:hover {
    background-color: var(--cursor-highlight);
  }

  .nari {
    color: var(--green-highlight);
    font-size: larger;
    text-transform: uppercase;
  }

  .english {
    color: var(--blue-highlight);
    font-size: large;
    font-weight: 500; 
    text-transform: uppercase;
  }

</style>
