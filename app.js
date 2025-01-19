let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let listaAmigosEspecial = document.getElementById("resultado");

function agregarAmigo() {
  let campoAmigo = document.getElementById("amigo");
  let valorCampoAmigo = campoAmigo.value;

  if (campoAmigo.value !== "") {
    amigos.push(valorCampoAmigo);
    let item = document.createElement("li");
    item.textContent = valorCampoAmigo;
    listaAmigos.append(item);
  } else {
    alert("Ingresar el nombre de un amigo es obligatorio");
  }

  campoAmigo.value = "";
}

function sortearAmigo() {
  if (amigos.length > 0) {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    let item = document.createElement("li");
    item.textContent = amigoSorteado;
    listaAmigosEspecial.append(item);

    setTimeout(() => {
      listaAmigosEspecial.removeChild(item);
    }, 1000);
  }
}
