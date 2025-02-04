// Função para adicionar um nome à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        const listaAmigos = document.getElementById('listaAmigos');
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        listaAmigos.appendChild(itemLista);
        input.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

// Função para sortear um nome da lista
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const itens = listaAmigos.getElementsByTagName('li');

    if (itens.length === 0) {
        alert('Adicione pelo menos um nome à lista antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * itens.length);
    const nomeSorteado = itens[indiceSorteado].textContent;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${nomeSorteado}</li>`;
}