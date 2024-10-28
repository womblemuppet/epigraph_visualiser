<script>
  import { query, englishQuery } from '../stores.js'

  function clearQuery() {
    query.set("")
    englishQuery.set("")
  }

</script>

<div class="queryInputArea">
  <input class="queryInput" bind:value={$query} input=queryInput type=text/>
  <button class="clearButton" on:click={clearQuery}>Clear</button>
  <input class="englishQueryInput" bind:value={$englishQuery} input=englishQueryinput type=text/>
</div>

<style>
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
    min-height: 100%;
    padding-left: 2%;
    padding-top: 0.75%;
    border-radius: 12px;
    border: 2px solid var(--element-colour-weak-2);
    width: 40%
  }

  .clearButton {
    margin: 0.20%;
    min-height: 100%;
    width: 20%;
    border: 2px solid var(--element-colour-weak-2);;
    border-radius: 12px;
    background-color: rgb(255, 255, 255);
    text-transform: uppercase;
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
</style>
