export async function getMonsters() {
  const resp = await fetch(`https://mhw-db.com/monsters`);
  const data = await resp.json();
  return data;
}
