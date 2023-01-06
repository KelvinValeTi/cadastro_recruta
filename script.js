/**
 * VALIDAÇÃO
 * 
 */
const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");

//msg erro
const erroNome = document.getElementById("erroNome");
const erroSobrenome = document.getElementById("erroSobrenome");

//variaveis output
let nomeCompleto;
let idade;
let campoEstudo;

//button cadastrar
const cadastrar = document.getElementById("cadastrar");

/**
 * 
 * FUNÇÕES 
 */

function validar(){
        
    let nomeValor = nome.value;
    let sobrenomeValor = sobrenome.value;

    var padrao = /[^a-zà-ú]/gi;
    
    let valida_nome = nomeValor.match(padrao);
    let valida_sobrenome = sobrenomeValor.match(padrao);

    //validar nome e sobrenome
    if( valida_nome || !nomeValor ){
        window.alert("Nome possui caracteres inválidos ou é vazio");
        erroNome.classList.remove("hide");
    }else{
        erroNome.classList.add("hide");
    }
    
    if( valida_sobrenome || !sobrenomeValor ){
        window.alert("Sobrenome possui caracteres inválidos ou é vazio");
        erroSobrenome.classList.remove("hide");
    }else{
        erroSobrenome.classList.add("hide");
    }

    //verifica se há mensagens de erro, se não houver, salva o nome completo.
    if(erroNome.classList.contains("hide") && erroSobrenome.classList.contains("hide")){
        window.alert("tudo oculto");
        nomeCompleto = valida_nome+" "+valida_sobrenome;
    }
}

/**
 * EVENTOS
 */

cadastrar.addEventListener("click", ()=>{
    validar();
});


