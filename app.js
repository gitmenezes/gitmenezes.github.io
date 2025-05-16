let nomes = document.getElementById('nome')//variavel do campo de texto
// Cria uma lista de objetos com nome e idade

var lista = [  
    {nome: "1 - FRANCISCO JOSE--MORRO GRANDE - FJ"},
    {nome: "2 - FRANCISCO SABINO--MORRO GRANDE - FS"},
    {nome: "3 - JUVENTINO FERREIRA--MORRO GRANDE - JF"},
    {nome: "4 - CORONEL LUIS SALLES--MORRO GRANDE - CEL"},
    {nome: "5 - MANOEL MACEDO REIS--MORRO GRANDE - MM"},
    {nome: "6 - MARIA AYDE JOSE--MORRO GRANDE - MAJ"},
    {nome: "7 - ARACY VILARINHO--CENTRO - AV"},
    {nome: "8 - DIVA ROMANO--CENTRO - DR"},
    {nome: "9 - FIGUEIRA DE BARROS--CENTRO - FB"},
    {nome: "10 - GABINO SALES--CENTRO - GS"},
    {nome: "11 - HONORATO REIS--CENTRO - HR"},
    {nome: "12 - OLIVIA FARIA--CENTRO - OF"},
    {nome: "13 - POLY GAMA--CENTRO - PG"},
    {nome: "14 - PORTELA SALLES--CENTRO - PS"},
    {nome: "15 - JOSÉ GOMES VILARINHO--CENTRO - JGV"},
    {nome: "16 - ADELCIO CANUTO--SAO CAETANO - AC"},
    {nome: "17 - ARISTIDES G DE SOUZA--SAO CAETANO - AGS"},
    {nome: "18 - DOZE DE JUNHO--SAO CAETANO - DJ"},
    {nome: "19 - GILSON SOUZA SOARES--SAO CAETANO - GSS"},
    {nome: "20 - HERIVELTON ALVES MARINHO--SAO CAETANO - HAM"},
    {nome: "21 - JOAO NOGUEIRA--SAO CAETANO - JN"},
    {nome: "22 - JOAQUIM JOSE DA COSTA--SAO CAETANO - JJC"},
    {nome: "23 - JOSE RESENDE--SAO CAETANO - JR"},
    {nome: "24 - NELSON RODRIGUES--SAO CAETANO - NR"},
    {nome: "25 - ZITTO S PEREIRA--SAO CAETANO - ZS"},
    {nome: "26 - ANTONIO AGUIAR--SAUDADE - AA"},
    {nome: "27 - ANTONIO DE CASTRO--SAUDADE - AC"},
    {nome: "28 - ANTONIO FERREIRA DA FONSECA--SAUDADE - AF"},
    {nome: "29 - FERNANDO MONTEIRO--SAUDADE - FM"},
    {nome: "30 - HELVIO SALLES--SAUDADE - HS"},
    {nome: "31 - JOAO MERIDA PADRON--SAUDADE - JM"},
    {nome: "32 - LIRA REIS SALLES--SAUDADE - LR"},
    {nome: "33 - MANOEL FERREIRA DOS SANTOS--SAUDADE - MF"},
    {nome: "34 - PEDRO PACHECO DA SILVA--SAUDADE - PP"},
    {nome: "35 - RITA FARIA--SAUDADE - RF"},
    {nome: "36 - OTAVIO LOURO GUIMARAES--PARQUE INDUSTRIALC - OL"},
    {nome: "37 - PEDRO PAULO BARCELOS--PARQUE INDUSTRIALC - PP"},
    {nome: "38 - CRENILMA DE SOUZA--PARQUE INDUSTRIALC - CS"},
    {nome: "39 - LUIZ RIBEIRO--PARQUE INDUSTRIALC - LR"},
    {nome: "40 - INACIO GOMES DE SOUZA--PARQUE INDUSTRIALC - IG"},
    {nome: "41 - JOAO DA SILVA MOCO--PARQUE INDUSTRIALC - JS"},
    {nome: "42 - SERAFIM JOSE DE OLIVEIRA--PARQUE INDUSTRIALC - SJ"},
    {nome: "43 - BRAS NUNES SIQUEIRA--PARQUE INDUSTRIALC - BN"},
    {nome: "44 - TANUS YUSSEF--PARQUE INDUSTRIALC - TY"},
    {nome: "45 - ANTONIO VIEIRA--PARQUE INDUSTRIALC - AV"},
    {nome: "46 - JOSE PAES--PARQUE INDUSTRIALC - JP"},
    {nome: "47 - ANA AGUIAR--PARQUE INDUSTRIALC - AA"},
    {nome: "48 - CASTRO LEAO--PARQUE INDUSTRIALC - CL"},
    {nome: "49 - PRAÇA DA BIBLIA--PARQUE INDUSTRIALC - PB"},
    {nome: "50 - PRAÇA PORTO DAS BARCAS--PARQUE INDUSTRIALC - PP"},
    {nome: "51 - SAID TANUS JOSE--PARQUE INDUSTRIALC - ST"},
    {nome: "52 - PRAÇA DA MATRIZ--PARQUE INDUSTRIALC - PM"},
    {nome: "53 - RAUL MARINHO--PARQUE INDUSTRIALB - RM"},
    {nome: "54 - JOSE LUIS MARINHO--PARQUE INDUSTRIALB - JL"},
    {nome: "55 - DOMINGOS MANHAES DE CASTRO--PARQUE INDUSTRIALB - DM"},
    {nome: "56 - FRANCISCO ROSA FERNANDES--PARQUE INDUSTRIALB - FR"},
    {nome: "57 - ESMENIA MACABU DE CASTRO--PARQUE INDUSTRIALB - EM"},
    {nome: "58 - ACYR RANGEL COUTINHO--PARQUE INDUSTRIALB - ARC"},
    {nome: "59 - VICENTE DA SILVA SANTOS--PARQUE INDUSTRIALB - VS"},
    {nome: "60 - ANTONIO PALOCY--PARQUE INDUSTRIALB - AP"},
    {nome: "61 - JOSE CORREIA FILHO--PARQUE INDUSTRIALB - JC"},
    {nome: "62 - DARIO HENRIQUE DE JESUS--PARQUE INDUSTRIALB - DH"},
    {nome: "63 - JOAQUIM XAVIER--PARQUE INDUSTRIALB - JX"},
    {nome: "64 - MARIO PENA--PARQUE INDUSTRIALB - MP"},
    {nome: "65 - RAFAEL DE OLIVEIRA--PARQUE INDUSTRIALB - RO"},
    {nome: "66 - MANOEL BARCELOS--PARQUE INDUSTRIALB - MB"},
    {nome: "68 - JUDITH BARRETO--SALDANHA DA GAMA - JB"},
    {nome: "69 - AMELIA MOTA--SALDANHA DA GAMA - AMO"},
    {nome: "70 - MARIA ROMANO--SALDANHA DA GAMA - MR"},
    {nome: "71 - MARIA INACIO--SALDANHA DA GAMA - MI"},
    {nome: "72 - LEONOR MARINHO--SALDANHA DA GAMA - LM"},
    {nome: "73 - SAO LUIS--SALDANHA DA GAMA - SL"},
    {nome: "74 - SALDANHA DA GAMA--SALDANHA DA GAMA - SG"},
    {nome: "75 - FRANCELINA DUARTE--SALDANHA DA GAMA - FD"},
    {nome: "76 - JANDIRA RANGEL--SALDANHA DA GAMA - JR"},
    {nome: "77 - RITA MACHADO FERNANDES--SALDANHA DA GAMA - RM"},
    {nome: "78 - SAO MIGUEL--SALDANHA DA GAMA - SM"},
    {nome: "79 - DJALMA RIBEIRO DA MOTA--SALDANHA DA GAMA - DR"},
    {nome: "80 - SEBASTIAO GONCALVES PIRES--SALDANHA DA GAMA - SG"},
    {nome: "81 - EDMUNDO RIBEIRO DA MOTA--SALDANHA DA GAMA - ERM"},
    {nome: "82 - PADRE JOSE POLICARPO--SALDANHA DA GAMA - PJ"},
    {nome: "83 - VILSON VAZ--SALDANHA DA GAMA - VV"},
    {nome: "84 - MANOEL PEREIRA DE ANDRADE--SALDANHA DA GAMA - MPA"},
    {nome: "85 - JOSIAS OLIVEIRA--SALDANHA DA GAMA - JO"},
    {nome: "86 - DANILO ROMANO--SALDANHA DA GAMA - DR"},
    {nome: "87 - SAO JOAO--SALDANHA DA GAMA - SJ"},
    {nome: "88 - SAO SEBASTIAO--SALDANHA DA GAMA - SS"}

]

function buscar(nome) {
    // Cria um array vazio para armazenar os resultados
    var resultados = [];
    // Converte o nome para letras minúsculas
    nome = nome.toLowerCase();
    // Percorre a lista de objetos
    for (var i = 0; i < lista.length; i++) {
        // Converte o nome do objeto para letras minúsculas
        var nomeObjeto = lista[i].nome.toLowerCase();
        // Verifica se o nome do objeto contém o nome buscado
        if (nomeObjeto.includes(nome)) {
            // Adiciona o objeto ao array de resultados
            resultados.push(lista[i]);
        }
    }
    // Retorna o array de resultados
    return resultados;
}
  // Cria uma função que mostra o resultado da busca na tela
function mostrar() {
    // Pega o valor do campo de texto
    var nome = document.getElementById("nome").value;
    // Chama a função buscar com esse valor
    var resultados = buscar(nome);
    // Verifica se encontrou algum objeto
    if (resultados.length > 0) {
        // Cria uma variável para armazenar o texto da resposta
        var resposta = "";
        // Percorre o array de resultados
        for (var i = 0; i < resultados.length; i++) {
            // Adiciona o nome
            resposta += resultados[i].nome + "<br>";
        }
        // Mostra o texto da resposta na tela
        document.getElementById("texto").innerHTML =  "<h4>" + resposta +"</h4>";
    } else {
        // Mostra uma mensagem de que não encontrou
        document.getElementById("texto").innerHTML = "Não encontrado";
    };
    
}
//Ação a ser executada enquanto o usuário digita a pesquisa
nomes.addEventListener('input',()=>{
    mostrar()
    buscar()
    
});

// Ação a ser executada quando a tecla F4 for pressionada
document.addEventListener('keydown', function (event) {
    if (event.key === 'F2') {
        nomes.value =''
        nomes.focus()
        
    }
});
//Ação a ser executada quando o campo for clicado
// nomes.addEventListener('click',function(){
    // nomes.value=''
// 
    // 
// });

//Ação a ser executada quando o campo for clicado
nomes.addEventListener('keydown',function (event) {
    if (event.key === 'Enter') {
        nomes.value=''
        nomes.focus()
    }
});

function atualizarPagina(){
    window.location.reload()
};

function Space(){
    let = document.getElementById('nome')
    nome.value = nome.value + " "
    mostrar()
};
//alfabetoQ-T
function Q(){
    let = document.getElementById('nome')
    nome.value = nome.value + "Q"
    mostrar()
};
function W(){
    let = document.getElementById('nome')
    nome.value = nome.value + "W"
    mostrar()
};
function E(){
    let = document.getElementById('nome')
    nome.value = nome.value + "E"
    mostrar()
};
function R(){
    let = document.getElementById('nome')
    nome.value = nome.value + "R"
    mostrar()
};
function T(){
    let = document.getElementById('nome')
    nome.value = nome.value + "T"
    mostrar()
};
//alfabetoY-P
function Y(){
    let = document.getElementById('nome')
    nome.value = nome.value + "Y"
    mostrar()
};
function U(){
    let = document.getElementById('nome')
    nome.value = nome.value + "U"
    mostrar()
};
function I(){
    let = document.getElementById('nome')
    nome.value = nome.value + "I"
    mostrar()
};
function O(){
    let = document.getElementById('nome')
    nome.value = nome.value + "O"
    mostrar()
};
function P(){
    let = document.getElementById('nome')
    nome.value = nome.value + "P"
    mostrar()
};

//alfabetoA-G
function A(){
    let = document.getElementById('nome')
    nome.value = nome.value + "A"
    mostrar()
};
function S(){
    let = document.getElementById('nome')
    nome.value = nome.value + "S"
    mostrar()
};
function D(){
    let = document.getElementById('nome')
    nome.value = nome.value + "D"
    mostrar()
};
function F(){
    let = document.getElementById('nome')
    nome.value = nome.value + "F"
    mostrar()
};
function G(){
    let = document.getElementById('nome')
    nome.value = nome.value + "G"
    mostrar()
};
//alfabetoH-Ç
function H(){
    let = document.getElementById('nome')
    nome.value = nome.value + "H"
    mostrar()
};
function J(){
    let = document.getElementById('nome')
    nome.value = nome.value + "J"
    mostrar()
};
function K(){
    let = document.getElementById('nome')
    nome.value = nome.value + "K"
    mostrar()
};
function L(){
    let = document.getElementById('nome')
    nome.value = nome.value + "L"
    mostrar()
};
function Ç(){
    let = document.getElementById('nome')
    nome.value = nome.value + "Ç"
    mostrar()
};
//alfabetoZ-M
function Z(){
    let = document.getElementById('nome')
    nome.value = nome.value + "Z"
    mostrar()
};
function X(){
    let = document.getElementById('nome')
    nome.value = nome.value + "X"
    mostrar()
};
function C(){
    let = document.getElementById('nome')
    nome.value = nome.value + "C"
    mostrar()
};
function V(){
    let = document.getElementById('nome')
    nome.value = nome.value + "V"
    mostrar()
};
function B(){
    let = document.getElementById('nome')
    nome.value = nome.value + "B"
    mostrar()
};
function N(){
    let = document.getElementById('nome')
    nome.value = nome.value + "N"
    mostrar()
};
function M(){
    let = document.getElementById('nome')
    nome.value = nome.value + "M"
    mostrar()
};
//seleciona texto ao clicar

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("nome");
    
    function selectText() {
        input.select();
    }

    input.addEventListener("focus", selectText);
    input.addEventListener("click", selectText);
});
//seleciona texto tempo após a edição

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("nome");
    let timeout;

    function selectTextWithDelay() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            input.select();
        }, 1000); // 1 segundo
    }

    input.addEventListener("input", selectTextWithDelay);
});


