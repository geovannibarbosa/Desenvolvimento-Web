let url = 'https://go-wash-api.onrender.com/api/auth/address'

async function cadastroEndereco(){
    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let address = document.getElementById('address').value;
    let number = document.getElementById('number').value;
    let complement = document.getElementById('complement').value;

    let token = JSON.parse(localStorage.getItem('user')).access_token;

if (title == "" || cep == "" || address == "" || number == ""){
    alert("Preencha os campos obrigatórios")
}else{
    let responseApi = await fetch (url,{
        method:"POST",
        body:JSON.stringify({
            "title":title,
            "cep":cep,
            "address":address,
            "number":number,
            "complement":complement
        }),
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer'+token
        } 

    });

    let resposta = await responseApi.json();

    if (resposta.data.address){
        alert('Endereço Cadastrado')
        window.location.href = "../view/home.html"}
}

}