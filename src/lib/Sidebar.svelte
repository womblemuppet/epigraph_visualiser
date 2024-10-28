<script>
  import SidebarWord from './SidebarWord.svelte'
	import QueryInputBar from './QueryInputBar.svelte';

  export let words

</script>

<div class="sidebar">
  <QueryInputBar></QueryInputBar>

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

    padding-bottom: 10%;
  }

  .sidebarWordList {
    position: fixed;
    overflow-y: scroll;
    width: 25%;
    height: 91%;
    top: 7%;
    right: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }

</style>

