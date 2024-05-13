let url = 'https://go-wash-api.onrender.com/api/auth/address';

async function endereco() {
    let token = JSON.parse(localStorage.getItem('user')).access_token;
    let resposta = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    });
    let responseApi = await resposta.json();

    let listaUl = document.getElementById("lista");
    responseApi.data.forEach(shortcut => {
        let title = shortcut.title;
        let cep = shortcut.cep;
        let address = shortcut.address;
        let number = shortcut.number;
        let complement = shortcut.complement;

        // Criando um elemento li para cada endereço
        let li = document.createElement("li");
        li.textContent = `${title} - CEP: ${cep}, ${address} ${number}, ${complement}`;
        listaUl.appendChild(li);
    });
}

// Chame a função após o carregamento do HTML
document.addEventListener("DOMContentLoaded", function() {
    endereco();
});
