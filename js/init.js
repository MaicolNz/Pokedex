var up = document.getElementById("up");
var down = document.getElementById("down");
var left = document.getElementById("left");
var right = document.getElementById("right");
var search = document.forms[0];
var screen = document.getElementById("screen");
var screen2 = document.getElementById("screen2");

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
  buscar(pokemon.id);
});
left.addEventListener("click", function (e) {
  if (pokemon.id) {
    document.getElementById("container_screen").style.display = "flex";
    screen2.classList.add("screen2");
    screen.classList.remove("screen");
    screen.classList.add("screen1");
    back(pokemon.id);
  }
});
right.addEventListener("click", function (e) {
  if (pokemon.id) {
    document.getElementById("container_screen").style.display = "block";

    screen2.classList.remove("screen2");
    screen2.src = "";
    screen.classList.add("screen");
    screen.classList.remove("screen1");
    buscar(pokemon.id);
  }
});

function buscar(id) {
  let name = search.name.value;
  if (id) {
    name = id;
  }
  fetch(url + name)
    .then((response) => response.json())
    .then(function (data) {
      screen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
      pokemon = data;
      pokemon.id = data.id;
      tipoColor(data.types[0].type.name, "A");
      if (data.types[1]) {
        tipoColor(data.types[1].type.name, "B");
      } else {
        document.getElementById("typeB").style.backgroundColor = "#FFFFFF";
      }
    });
}

search.addEventListener("submit", function (e) {
  e.preventDefault();
  buscar();
});
function back(id) {
  screen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
  screen2.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
function tipoColor(type, char) {
  switch (type) {
    case "water":
      document.getElementById("type" + char).style.backgroundColor = "#0000FF";
      break;
    case "fire":
      document.getElementById("type" + char).style.backgroundColor = "#f59622 ";
      break;
    case "grass":
      document.getElementById("type" + char).style.backgroundColor = "#00805E";
      break;
    case "fairy":
      document.getElementById("type" + char).style.backgroundColor = "#FFCBDB";
      break;
    case "ground":
      document.getElementById("type" + char).style.backgroundColor = "#4e3b31 ";
      break;
    case "stone":
      document.getElementById("type" + char).style.backgroundColor = "#8b8c7a ";
      break;
    case "ghost":
      document.getElementById("type" + char).style.backgroundColor = "#7176B6";
      break;
    case "poison":
      document.getElementById("type" + char).style.backgroundColor = "#A45B9E";
      break;
    case "steel":
      document.getElementById("type" + char).style.backgroundColor = "#535654 ";
      break;
    case "electric":
      document.getElementById("type" + char).style.backgroundColor = "#F6CF57";
      break;
    case "bug":
      document.getElementById("type" + char).style.backgroundColor = "#B2BF21";
      break;
    case "fighting":
      document.getElementById("type" + char).style.backgroundColor = "#B2BF21";
      break;
    case "flying":
      document.getElementById("type" + char).style.backgroundColor = "#A4BBF9";
      break;
    case "ice":
      document.getElementById("type" + char).style.backgroundColor = "#9EE4FC";
      break;
    case "normal":
      document.getElementById("type" + char).style.backgroundColor = "#B8B5A7";
      break;
    case "physic":
      document.getElementById("type" + char).style.backgroundColor = "#FF5599";
      break;
    case "dragon":
      document.getElementById("type" + char).style.backgroundColor = "#6F5FCC";
      break;
    case "dark":
      document.getElementById("type" + char).style.backgroundColor = "#63483F";
      break;
  }
}
