export async function getCharacters() {
  const resp = await fetch(`https://thronesapi.com/api/v2/characters`);
  const data = await resp.json();
  return data;
}

export async function sortCharacters() {
  const resp = await fetch(`https://thronesapi.com/api/v2/characters`);
  const data = await resp.json();
  data.sort();
  return data;
}
