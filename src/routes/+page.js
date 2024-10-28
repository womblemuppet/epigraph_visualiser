export async function load({fetch, _params}) {
  const tabletsSourceRaw = await fetch('/TabletsSource.json');
  const tabletsSource = await tabletsSourceRaw.json();

  const wordsSourceRaw = await fetch('/WordsSource.json');
  const wordsLookup = await wordsSourceRaw.json()

  return {
    tabletsSource: tabletsSource,
    wordsLookup: wordsLookup
  };
}
