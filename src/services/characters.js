export async function getCharacters() {
  const resp = await fetch(`https://thronesapi.com/api/v2/characters`);
  const data = await resp.json();
  let uniqueId = 0;
  data.forEach((char) => {
    char.id = uniqueId;
    uniqueId++;
  });

  return data;
}

export async function sortCharacters() {
  const resp = await fetch(`https://thronesapi.com/api/v2/characters`);
  const data = await resp.json();
  data.sort();
  let uniqueId = 0;
  data.forEach((char) => {
    char.id = uniqueId;
    uniqueId++;
  });

  return data;
}
