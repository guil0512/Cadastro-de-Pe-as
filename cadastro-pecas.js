let lista_pecas = 10;
let peso_peca = 100;
let nome_peca = "mo";
// Capacidade máxima da caixa é de 10 peças
// Peso da peça tem que ser superior a 100
// Nome da peça tem que ter mais de 3 caracteres

if(lista_pecas > 10){
    console.log("Não tem capacidade suficiente!");
}else if(nome_peca.length < 3){
    console.log("Nome da peça não pode ser inferior a 3 caracteres!");
}else if(peso_peca >= 100 && lista_pecas <= 10){
let listaPecas = 10;
let nomePeca = "mobi";
let nomePecaCaracteres = nomePeca.length;
let pesoPeca = 101;

if (listaPecas > 10) {
    console.log("A caixa está cheia!");
} else if (nomePecaCaracteres <= 3) {
    console.log("Nome da peça tem que ser superior a 3 caracteres!");
} else if (pesoPeca > 100 && listaPecas <= 10 && nomePecaCaracteres > 3) {
    console.log("Pode cadastrar!");
} else {console.log("Não pode cadastrar!");
}}