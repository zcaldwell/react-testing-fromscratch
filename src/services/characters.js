export async function getCharacters(query) {
  const params = new URLSearchParams();
  params.set('character', query);

  const resp = await fetch(`https://thronesapi.com/api/v2/characters`);
  const data = await resp.json();
  return data;
}
