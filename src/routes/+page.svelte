<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Playwrite+DE+Grund:wght@100..400&display=swap" rel="stylesheet">


<script>
  import Sidebar from '../lib/Sidebar.svelte';
  import TabletList from '../lib/TabletList.svelte'
  import QueryDisplay from '../lib/QueryDisplay.svelte';

  import { query, englishQuery } from '../stores.js'
  import { readable, writable } from 'svelte/store';
  import { setContext } from 'svelte';

  export let data;
  
  const wordsLookup = writable(null)
  $: setContext('wordsLookup', wordsLookup)
  $: wordsLookup.set(data.wordsLookup)

  export const tabletsSource = readable(data.tabletsSource)

  $: tablets = matchTablets(data.tabletsSource, $query)

  function matchTablets(tabletsSource, query) { 
    const tablets = tabletsSource.map((tabletSource) => {
      const sentencesWithMatchData = matchSentences(tabletSource.sentences, query)

      const anyMatchingSentences = sentencesWithMatchData.some(
        function(sentence) {
          return sentence.some( (word) => { return word.isMatch })
        }
      )

      const visible = (anyMatchingSentences || query == "")

      const tabletData = {
        ...tabletSource,
        sentences: sentencesWithMatchData,
        visible: visible
      }

      return tabletData
    })

    return tablets
  }

  function matchSentences(sentences, query) {
    const sentencesWithMatchData = sentences.map(function(sentence) {
      const sentenceWithMatches = sentence.map((word) => {
        const isMatch = (query !== "" && word.nari
          .toLowerCase()
          .includes(query.toLowerCase()))

        const wordData = $wordsLookup[word.nari] || { nari: "?", english: "?" }

        return {
          word: word.nari,
          tense: word.tense,
          wordData: wordData,
          isMatch: isMatch
        }

      })

      return sentenceWithMatches
    })

    return sentencesWithMatchData    
  }

  function filterWordsLookupByEnglish(wordsLookup, query) {
    const filteredWordList = Object
      .keys(wordsLookup)
      .reduce(
        function(acc, wordId) {
          const queryMatchesEnglish = wordsLookup[wordId].english && 
            wordsLookup[wordId].english.toLowerCase().includes(query)

          if (queryMatchesEnglish)
            return [...acc, wordsLookup[wordId]]
          else
            return acc
        },
        []
      )

    return filteredWordList
  }

  $: filteredWordsList = filterWordsLookupByEnglish($wordsLookup, $englishQuery)

</script>

<Sidebar words={filteredWordsList}></Sidebar>

<div>
  <QueryDisplay/>
  <TabletList {tablets}></TabletList>
</div>


<style>
  :global(hr) {
    flex: 0 0 100%;
    height: 0px;
  }

  :global(body) {
    margin: 0px 10px 10px 10px;
    padding: 0;
    font-family: 'Inconsolata';
    font-size: large;
    /* background-image: url('./question-mark.svg'); */

    --main-background-colour: rgb(243, 243, 243);
    --element-colour-weak-1: rgb(252, 252, 252);
    --element-colour-weak-2: rgb(243, 243, 243);
    --element-colour-weak-3: rgb(226, 226, 226);
    --element-colour-weak-4: rgb(214, 214, 214);

    --green-highlight: rgb(40, 180, 122);
    --green-highlight-strong: rgb(9, 150, 91);
    --element-colour-green-tint-1: rgb(211, 245, 222);

    --blue-highlight: #7eb8ee;
    --blue-highlight-strong: #1d82e0;

    --cursor-highlight: rgb(255, 252, 59);


    background-color: var(--main-background-colour);
  }


</style>
