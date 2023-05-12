//OBJETOS DE USUARIOS
const users = {
    nome: '',
    usuario: '',
    senha: '',
    logado: false,
};

//ARRAY DE OBJETOS DOS USUARIOS
let usersArray = [];


function startApp(){
    let opcao = 999;
    
    while(opcao !==0){
        let result;

        switch(opcao){
            case 1:
                result = login();
                    if (result){
                        alert('Entrar no menu principal!');
                    } else {
                        alert('Usuário e senha incorretos');
                    }
                break;
            case 2:
                result = register();
                if (!result){
                    alert('Não possível fazer o cadastro!');
                } else{
                    alert('Opa, usuário cadastro com sucesso! 👍\n Agora é só acessar!');
                }
                break;
            case 999:
                alert('Você precisa estar logado para acessar o menu principal!\n\n'+
                'Caso ainda não tenha usuário cadastrado, utilize a opção 2 do menu e faça seus registro');
                break;
            default:
                alert('Opção não encontrada!')
                break;
        }

        opcao = Number(prompt("Selecione a opção desejada:\n"+ 
                "1 - Entrar\n"  +
                "2 - Cadastrar Usuário\n" + 
                "3 - Esqueci minhas credenciais \n" +
                "0 - Sair"
           
            )
        )

    }
}
//FUNÇÂO LOGIN
function login(){
    let user       = prompt('Digite seu usuário: ');
    let password    = prompt('Sua senha: ');

    validateLogin(user,password);
}
//FUNÇÂO DE VALIDAÇÂO DE LOGIN
function validateLogin(user, password){
    let result = false;
    for (let i = 0; i < usersArray.length; i++){
        console.log(usersArray[i]);
            if(usersArray[i].usuario === user && usersArray.senha === password){
            result = true;
            usersArray[i].logado = true;
        }

    }
    return result;
}

//FUNÇÂO DE CADASTRAR USUÁRIO
function register(){
    let result = false;

    users.nome      = prompt('Nome: ');
    users.usuario   = prompt('Usuário: ');
    users.senha     = prompt('Senha: ');

    if(users.nome !== '' && users.senha !== ''){
        usersArray.push(users);
        result = true;
    }

    return result;    

}

//Inicia o sistema
startApp();