/**
 * VALIDAÇÃO
 * 
 */
const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const curso = document.getElementById("curso-option");
const dataNasc = document.getElementById("input-data-nasc");

//msg erro
const erroNome = document.getElementById("erroNome");
const erroSobrenome = document.getElementById("erroSobrenome");
const erroDate = document.getElementById("erroDate");

//variaveis output
let nomeCompleto="";
let idade=0;
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
        erroNome.classList.remove("hide");
    }else{
        erroNome.classList.add("hide");
    }
    
    if( valida_sobrenome || !sobrenomeValor ){
        erroSobrenome.classList.remove("hide");
    }else{
        erroSobrenome.classList.add("hide");
    }

    //verifica se há mensagens de erro, se não houver, salva o nome completo.
    if(erroNome.classList.contains("hide") && erroSobrenome.classList.contains("hide")){
        nomeCompleto = nomeValor+" "+sobrenomeValor;
    }else{
        nomeCompleto="";
    }
}

function validaIdade(){
    
    const nascimento = new Date(dataNasc.value);
    const dataHoje= new Date();

    //18 anos em milissegundos
    const eighteenYears = ((((1000 * 60)*60)*24)*365)*18;
    
    //o "+1" é para compensar a data que vem errada e prepara para função que calculará os milissegundos
    const dia = (nascimento.getDate())+1;
    const mes = (nascimento.getMonth())+1;
    const year = nascimento.getFullYear();

    const dataNascFormatada= new Date(mes+"-"+dia+"-"+year);

    const diferenceDate = (dataHoje.getTime() - dataNascFormatada.getTime());

    /**
     * validação
     * tem de ser maior que 18 anos
     */
    if(diferenceDate< eighteenYears || !dataNasc.value){
        console.log("o recruta deve ter idade igual ou maior que 18 anos");
        erroDate.classList.remove("hide");
    }else{
        erroDate.classList.add("hide");
        idade = Math.floor((diferenceDate/86400000)/365);
    }
}

function exibeResultado(){
    const form = document.getElementById("form");
    form.classList.add("hide");

    const divOutput = document.getElementById("output");
    divOutput.classList.remove("hide");
    
    let nomeOutput = document.createElement('p');
    let campoEstudoOutput = document.createElement('p');
    let idadeOutput = document.createElement('p');

    nomeOutput.textContent = "- Nome Completo: "+nomeCompleto;
    campoEstudoOutput.textContent = "- Campo de estudo: "+campoEstudo;
    idadeOutput.textContent = "- Idade: "+idade+" anos";

    divOutput.appendChild(nomeOutput);
    divOutput.appendChild(campoEstudoOutput);
    divOutput.appendChild(idadeOutput);
}


/**
 * EVENTOS
 */

cadastrar.addEventListener("click", ()=>{
    //valida nome e sobrenome, se passar é armazenado na variavel nomeCompleto
    validar();

    //armazena curso
    campoEstudo= curso.options[curso.selectedIndex].text;
    
    //valida data e já lança a idade
    validaIdade();

    //exibir resultado
    if(nomeCompleto!="" || idade!=0){
        exibeResultado();
    }
});