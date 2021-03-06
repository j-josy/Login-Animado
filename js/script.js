//variáveis com escopo Global
const btnAtivar = document.querySelector('#btnAtivar');
const btnLogar = document.querySelector('#btnLogar');
const modal = document.querySelector('#modal');
const loader = document.querySelector('#load');
const notificacao = document.querySelector('#notificacao');
let isLoading = false;

// Forma tradicional
/*function animarModal() {
    modal.classList.toggle('animar');
}*/

// Forma avançada 1 (com Função Anônima)
/*btnAtivar.addEventListener('click', function() {
    modal.classList.toggle('animar');
});*/

// Forma avançada 2 (com Arrow Function)
btnAtivar.addEventListener('click', () => {
    modal.classList.toggle('animar');
    document.querySelector('#email').focus();
    notificacao.style.display = 'none';
});

    //controle de Botão logar
btnLogar.addEventListener('click', () => {
    //console.log("1. isLoad: " + isLoading); // << Notificação
    
     //verifica se  não está carregando
    if (!isLoading) {
        console.log("2. IF");

        isLoading = true;
        console.log("3. isLoad: " + isLoading);
        //para ele aparecer
        loader.style.display = "block";
        //console.log("4.loader.display: block");

        //chama a animação (girando)
        loader.classList.toggle('loader');
        //console.log("5. toggle('loader')");


        //esconde a mensagem
        notificacao.style.display = "none";

        // Espera 2 segundos
        setTimeout(() => {
            //console.log("6. setTimeout");

            loader.style.display = "none";
            //console.log("7. loader.display: none");

            //esconde a animação (girando)
            loader.classList.toggle('loader');


         
            isLoading = false;
             // console.log("8. isLoad: " + isLoading');
            

            efetuarLogin();

        }, 2000); // tempo em mili (1 segundo == 1000 mili)
    }
});

// Simulando os dados armazenados no Banco de Dados
const emailDB = "josseanevendetti@gmail.com";
const senhaDB = "12345";

function efetuarLogin() {
    // Guarda os valores informados pelo usuário
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    notificacao.style.display = "block";

    //verifica se o E-mail foi preenchido
    if (email == "") {
        notificacao.style.color = "#ff4639";
        notificacao.innerHTML = "Preencha o campo E-mail";
        document.querySelector('#email').focus();
        return; // Early Return (retorno precoce/antecipado)
    }

        //verifica se a senha foi preenchida
    if (senha == "") {
        notificacao.style.color = "#ff4639";
        notificacao.innerHTML = "Preencha o campo Senha";
        document.querySelector('#senha').focus();
        return;// Early Return (retorno precoce/antecipado)
    

    }

    // Compara com os dados do DB(banco de dados)
    if (email == emailDB && senha == senhaDB) {
        notificacao.style.color = "#49b401";
        notificacao.innerHTML = "Login efetuado com sucesso!";
    
    } else{
        notificacao.style.color = "#ff4639";
        notificacao.innerHTML = "E-mail ou Senha inválidos";
    }
}