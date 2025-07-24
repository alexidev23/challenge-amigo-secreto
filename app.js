let amigosSecretos = []
// Funcion para agregar un amigo y controlar que no se ingrese un nombre vacio
function agregarAmigo() {
  let input = document.getElementById('amigo').value
  let listaAmigos = document.getElementById('listaAmigos')

  // Detecta si no se ingresa nada en el input
  if (input === '') {
    alert('Por favor, ingresa un nombre valido.');
    return true;
  } else {
    // Agregar un amigo
    amigosSecretos.push(input)
    console.log(amigosSecretos)
    
    // Limpia el input
    document.getElementById('amigo').value = '' 

    listaAmigos.innerHTML = amigosSecretos.map((amigo) => {
      return `<li>${amigo}</li>`
    }).join('')
  }
}

function sortearAmigo() {
  let amigoSortado = document.getElementById('resultado')
  let numRandom = Math.floor(Math.random() * amigosSecretos.length)
  let listaAmigos = document.getElementById('listaAmigos')

  listaAmigos.innerHTML = ''

  amigoSortado.innerHTML = amigosSecretos[numRandom] ? `El amigo secreto sorteado es: ${amigosSecretos[numRandom]}` : 'No hay amigos para sortear. Por favor, agrega amigos primero.'
}