<script>
  import SidebarWord from './SidebarWord.svelte'
  import { query } from '../stores.js'

  export let words

  function clearQuery() {
    query.set("")
  }

</script>

<div class="sidebar">
  <div class="queryInputArea">
    <input class="queryInput" bind:value={$query} input=queryInput type=text/>
    <button class="clearButton" on:click={clearQuery}>Clear</button>
    <input class="englishQueryInput" input=englishQueryinput type=text placeholder="(doesn't work atm)"/>
  </div>

  <div class="sidebarWordList">
    {#each words as wordData}
      <SidebarWord {...wordData}></SidebarWord>
    {/each}
  </div>

</div>

<style>
  .sidebar {
    position: fixed;
    width: 25%;
    height: 85%;
    top: 1%;
    right: 1%;

    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    border-left: 10px solid rgb(248, 248, 248);

    padding-bottom: 150px;
  }

  .sidebarWordList {
    position: fixed;
    overflow-y: scroll;
    width: 25%;
    height: 91%;
    top: 7%;
    right: 0;
  }

  .queryInputArea {
    position: relative;
    top: 1%;
    margin: 0 5% 0 3%;

    border: 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .queryInput {
    height: 30px;
    padding-left: 12px;
    padding-top: 4px;
    border-radius: 12px;
    border: 2px solid var(--element-colour-weak-2);
    width: 40%
  }

  .clearButton {
    border: none;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    text-transform: uppercase;
    height: 34px;
    width: 20%
  }

  .englishQueryInput {
    height: 30px;
    padding-left: 12px;
    padding-top: 4px;
    border-radius: 12px;
    border: 2px solid var(--element-colour-weak-2);
    width: 40%
  }

  .clearButton:hover {
    background-color: var(--cursor-highlight);
  }

  ::-webkit-scrollbar {
    display: none;
  }

</style>

