async function sorteia(){
    var url = "https://pokeapi.co/api/v2/pokemon/pikachu"
  
    var response = await fetch(url)
    var data = await response.json()
  
    var name = data.name
    document.getElementById("pkmName").innerHTML = name
  
    var tipo = data.types[0].type.name
    document.getElementById("pkmType").innerHTML = tipo
  
    var ab = data.abilities[0].ability.name
    document.getElementById("pkmAb").innerHTML = ab
  
    var path = data.sprites.front_default
    document.getElementById("pkmImg").src = path
  
    document.getElementById("pokebola").innerHTML = "Clique no Pokémon!"
  }