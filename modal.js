// Obtém o elemento modal
let modal = document.getElementById("modal");
// Obtém a imagem do modal
let modalImg = document.getElementById("img-modal");

// Função para abrir o modal
function abrirModal(imagem) {
  modal.style.display = "block"; // Mostra o modal
  modalImg.src = imagem.src; // Define a imagem do modal
}

// Função para fechar o modal
function fecharModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}
