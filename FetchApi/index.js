
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data.sprites.front_default))
    .catch(error => console.error(error));

async function fetchData() {
  const pokemonName = String(document.getElementById("pokemon").value).toLowerCase().trim();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
  try {
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error("Pokemon not found")
    }
    const data = await response.json();
    const img = data.sprites.front_default;

    const picture = document.getElementById("picture");
    picture.src = img;
    picture.style.display = "block";
    picture.style.width = "350px";

  } catch (error) {
    console.error(error);
  }
}