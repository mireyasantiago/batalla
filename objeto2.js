alert("mensaje");


function Pokemon(nombre, color, puntosAtaque , puntosVida){
  this.nombre = nombre;
  this.color = color;
  this.puntosAtaque = puntosAtaque;
  this.puntosVida = puntosVida;


}

var guardarPoke = [];

function crearPokemon(){
  var nombrePokemon= document.getElementById('nombrePoke');
  var colorPokemon= document.getElementById('colorPoke');
  var puntosAtaque= document.getElementById('puntosAtaque');
  var puntosVida= document.getElementById('vida');

  this.atacar = function(pokemon){
    pokemon.puntosVida = pokemon.puntosVida - puntos.Ataque
  }

  var pokemon = new Pokemon(nombrePokemon.value,
                            colorPokemon.value,
                            parseInt(puntosAtaque.value),
                            parseInt(puntosVida.value)

                          )
  guardarPoke.push(pokemon)
  mostrarPokemons()

  var pokemonDos = new Pokemon(nombrePokemon.value,
                            colorPokemon.value,
                            parseInt(puntosAtaque.value),
                            parseInt(puntosVida.value)

                          )
  guardarPoke.push(pokemonDos)
  mostrarPokemons()

}



function mostrarPokemons(){
  var selectPokemones= document.getElementById('seccionPokemones');
  var select= document.createElement("option");

  guardarPoke.forEach(function(pokemon){
    var elemento = document.createElement("select")
    elemento.innerText = pokemon.nombre + pokemon.color
    + pokemon.puntosAtaque + pokemon.puntosVida;
    select.appendChild(elemento)

  })
  selectPokemones.appendChild(select);

}
