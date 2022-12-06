var up = document.getElementById("up");
var down = document.getElementById("down");
var left = document.getElementById("left");
var right = document.getElementById("right");
var search = document.forms[0];
var screen = document.getElementById("screen");
var pokemon = {};
const url = "https://pokeapi.co/api/v2/pokemon/";

up.addEventListener("click", function (e) {
  pokemon.id++;
  fetch(url + pokemon.id)
    .then((response) => response.json())
    .then(function (data) {
      screen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
      pokemon = data;
    });
});
down.addEventListener("click", function (e) {
  pokemon.id--;
  fetch(url + pokemon.id)
    .then((response) => response.json())
    .then(function (data) {
      screen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
      pokemon = data;
    });
});
left.addEventListener("click", function (e) {
  console.log("asd");
});
right.addEventListener("click", function (e) {
  console.log("asd");
});

search.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = search.name.value;
  fetch(url + name)
    .then((response) => response.json())
    .then(function (data) {
      screen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
      pokemon = data;
      pokemon.id = data.id;
    });
});
