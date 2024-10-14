<script>
  export let nari;
  export let english;
  export let tense;
  export let english_tense_1;
  export let english_tense_2;
  export let english_tense_3;
  export let english_tense_4;
  export let confidence;

  import { query } from '../stores.js'

  export let isHighlighted;
  $: nariText = getNariText()
  $: nariMainColor = isHighlighted ? "var(--green-highlight-strong)" : "black"
  $: nariTextWidth = isHighlighted ? "0.75px" : "0px"
  $: backgroundColor = isHighlighted ? "var(--element-colour-green-tint-1)" : "var(--element-colour-weak-2)"

  function getNariText() {
    switch (tense) {
      case 0:
      case "":
        return english
      break
      case 1: return english_tense_1 || english
      break
      case 2: return english_tense_2 || english
      break
      case 3: return english_tense_3 || english
      break
      case 4: return english_tense_4 || english
      break
      default:
        throw new Error("Unknown tense"); //##!!
      break
    }
  }

  function clickTablet() {
    query.set(nari)
  }

</script>

<button style={`background-color: ${backgroundColor};`} on:click={clickTablet}>
  <p class="english">{ nariText || "-" }</p>
  <p style={`color: ${nariMainColor}; -webkit-text-stroke-width: ${nariTextWidth};`}>{nari}</p>
</button>
  
<style>
	button {
    padding: 3px;
    margin: 1px;
    border: none;
    height: fit-content;
    text-align: center;
    min-width: 50px;
    max-height: 75px;
    border-radius: 4px;
	}

  button:hover {
    background-color: rgb(255, 252, 59);
  }

  .english {
    font-size: larger;
  }
</style>
