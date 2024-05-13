const url = 'https://go-wash-api.onrender.com/api/login';

async function login(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    
    let response = await fetch(url,{
        method:"POST",
        body:JSON.stringify({
                "email":email,
                "password":senha,
                "user_type_id": 1
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    let responseApi = await response.json();

    localStorage.setItem('user', JSON.stringify(responseApi))

    console.log(responseApi)

    if (responseApi.access_token){window.location.href = "../view/home.html"}
    else if (responseApi.data.errors){
        if (responseApi.data.errors.password){alert(responseApi.data.errors.password)}
        else if (responseApi.data.errors.email){alert(responseApi.data.errors.email)}
        else{alert(responseApi.data.errors);}
    }
}