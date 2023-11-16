// Importa o módulo readline-sync para entrada de dados pelo console
import entradaDados from "readline-sync";

// Definindo os dados dos salários mínimos
let salarioMinimo = [
    {Ano: "2010", salario: 510.00},
    {Ano: "2011", salario: 545.00},
    {Ano: "2012", salario: 622.00},
    {Ano: "2013", salario: 678.00},
    {Ano: "2014", salario: 724.00},
    {Ano: "2015", salario: 788.00},
    {Ano: "2016", salario: 880.00},
    {Ano: "2017", salario: 937.00},
    {Ano: "2018", salario: 954.00},
    {Ano: "2019", salario: 998.00},
    {Ano: "2020", salario: 1045.00}
]

// Definindo os dados de inflação IPCA
let inflacao = [
    {Ano: "2010", ipca: 5.91},
    {Ano: "2011", ipca: 6.50},
    {Ano: "2012", ipca: 5.84},
    {Ano: "2013", ipca: 5.91},
    {Ano: "2014", ipca: 6.41},
    {Ano: "2015", ipca: 10.67},
    {Ano: "2016", ipca: 6.29},
    {Ano: "2017", ipca: 2.95},
    {Ano: "2018", ipca: 3.75},
    {Ano: "2019", ipca: 4.31},
    {Ano: "2020", ipca: 4.52}
]

console.log("Escolha uma das alternativas:\n")

console.log("1 - Listar os Salários mínimos de 2010 à 2020")
console.log("2 - Listar o índice IPCA de 2010 à 2020")
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA")

// Solicitar a escolha do usuário
let escolha = entradaDados.question("Digite o numero da sua escolha: ")

switch(escolha){
    case "1":
        console.log("\nSalários Mínimos de 2010 à 2020:");
        for(let contador = 0; contador < salarioMinimo.length; contador++){
            // Imprime o ano com padding à esquerda e o salário com formatação
            console.log("\nAno: " + salarioMinimo[contador].Ano.padStart(35, '.') + "\nSalário mínimo: " + "R$ ".padStart(20, '.') + salarioMinimo[contador].salario.toFixed(2) + "\n");
        }
        break;
    case "2":
        for(let contador = 0; contador < inflacao.length; contador++){
            // Imprime o ano com padding à esquerda e a inflação com formatação
            console.log("\nAno: " + inflacao[contador].Ano.padStart(35, '.') + "\nInflação IPCA: " + inflacao[contador].ipca.toFixed(2).padStart(25, '.') + "%\n");
        }
        break;
    case "3":
        for (let contador = 0; contador < salarioMinimo.length; contador++) {
            // Imprime o ano com padding à esquerda, o salário com formatação e o crescimento salarial com padding
            console.log("\nAno: " + salarioMinimo[contador].Ano.padStart(35, '.') + "\nSalário mínimo: " + "R$ ".padStart(20, '.') + salarioMinimo[contador].salario.toFixed(2));
            
            let aumento = 0;
            if (contador > 0) {
                // Calcula o aumento salarial apenas para anos maiores que 2010
                aumento = ((salarioMinimo[contador].salario - salarioMinimo[contador - 1].salario) / salarioMinimo[contador - 1].salario) * 100;
            }
            
            // Imprime o crescimento salarial com padding e a inflação com formatação
            console.log("Crescimento Salarial: " + aumento.toFixed(2).padStart(18, '.') + "%");
            console.log("Inflação IPCA: " +inflacao[contador].ipca.toFixed(2).padStart(25, '.')+"%\n");
        }
        break;
    default:
        console.log("Escolha inválida.");
}
