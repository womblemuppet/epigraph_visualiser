<script>
  import { query } from '../stores.js'

</script>

<div class="queryDisplay">
  <p class="queryDisplayText">{@html $query || "<wbr>"}</p>
</div>

<style>
  .queryDisplay {
    margin: 1% 0 1.5% 0;

    height: fit-content;
    width: 72%;
    
    border-radius: 16px;

    background-color: rgb(255, 255, 255);
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(93, 238, 100, 0.02) );

    content: '';
  }

  .queryDisplayText {
    padding: 4px;
    font-size: 250%;
    font-weight: 100;
    margin: 0;
    padding-left: 1.75%
  }

</style>
