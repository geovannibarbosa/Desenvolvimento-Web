const url = 'https://go-wash-api.onrender.com/api/user';

async function cadastroUsuario(){   
    var name = document.getElementById('name').value;     
    var email = document.getElementById('email').value;     
    var password = document.getElementById('password').value;     
    var cpf_cnpj = document.getElementById('cpf_cnpj').value;     
    var date = document.getElementById('birthday').value;
    
    if (name == '' || email == '' || password == '' || cpf_cnpj == '' || date == ''){
        alert('Preencha todos os campos obrigatórios');
    }else{
        let resposta = await fetch(url,{
            method:"POST",
            body:JSON.stringify(
                {
                    "name":name,
                    "email":email,
                    "user_type_id":1,
                    "password": password,
                    "cpf_cnpj": cpf_cnpj,
                    "terms": 1,
                    "birthday":date    
                }),
            headers:{
                'Content-Type': 'application/json'
            }        
        });

        let respostaApi = await resposta.json();
        
        if(respostaApi.data.statusCode == 422){
            if(respostaApi.data.errors.email){
                alert(respostaApi.data.errors.email[0]);
            }
            else if(respostaApi.data.errors.cpf_cnpj){
            alert(respostaApi.data.errors.cpf_cnpj[0]);
            }
            else if(respostaApi.data.errors.password){
            alert(respostaApi.data.errors.password[0]);
            }
            else{
                alert(respostaApi.data.errors)
            }
        }else{
        alert("Cadastro feito com sucesso");
        window.location.href = "login.html";
        }
    }
}

