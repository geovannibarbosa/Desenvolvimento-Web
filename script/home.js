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

    let table = document.createElement("table");
    table.style.width = '100%';
    table.setAttribute('border', '1');
    
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    
    let headers = ["Título", "CEP", "Endereço", "Número", "Complemento"];
    headers.forEach(headerText => {
        let th = document.createElement("th");
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    let tbody = document.createElement("tbody");
    
    responseApi.data.forEach(elemento => {
        let row = document.createElement("tr");
    
        let titleCell = document.createElement("td");
        titleCell.appendChild(document.createTextNode(elemento.title));
        row.appendChild(titleCell);
    
        let cepCell = document.createElement("td");
        cepCell.appendChild(document.createTextNode(elemento.cep));
        row.appendChild(cepCell);
    
        let addressCell = document.createElement("td");
        addressCell.appendChild(document.createTextNode(elemento.address));
        row.appendChild(addressCell);
    
        let numberCell = document.createElement("td");
        numberCell.appendChild(document.createTextNode(elemento.number));
        row.appendChild(numberCell);
    
        let complementCell = document.createElement("td");
        complementCell.appendChild(document.createTextNode(elemento.complement));
        row.appendChild(complementCell);
    
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    
    listaUl.parentNode.replaceChild(table, listaUl);
    
}

endereco();

