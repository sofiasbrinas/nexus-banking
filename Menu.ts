import { colors } from "./src/util/Colors";
import { input } from "./src/util/Input";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;

    // Testes da Classe Conta Corrente

    console.log("\nTestes - Classe Conta Corrente");

    const cc1 = new ContaCorrente(1, 1, 5678, "Bianca", 200000.00, 2000.00)

    cc1.visualizar();
  
    console.log("\nSacar 1000.00");
    console.log("\n", cc1.sacar(1000.00));

    console.log("\nSacar 200000.00");
    console.log("\n", cc1.sacar(200000.00));

    console.log("\nDepositar 500.00");
    
    cc1.depositar(500.00);

    // Testes da Classe Conta Poupança

    console.log("\nTestes - Classe Conta Poupança");

    const cp1 = new ContaPoupanca(2, 1, 1249, "Paula", 2000.00, 12);

    cp1.visualizar();

    console.log("\nSacar 1000.00");
    console.log("\n", cp1.sacar(1000.00));

    console.log("\nSacar 2100.00");
    console.log("\n", cp1.sacar(2100.00));

    console.log("\nDepositar 500.00");
    cp1.depositar(500.00);

    cp1.visualizar();

    console.log("\n");


    while(true){

        console.log("╔════════════════════════════════════════════════════════════════════╗");
        console.log("║                                                                    ║");
        console.log("║            " + colors.fg.yellow + "███╗   ██╗███████╗██╗  ██╗██╗   ██╗███████╗" + colors.reset + "             ║");
        console.log("║            " + colors.fg.yellow + "████╗  ██║██╔════╝╚██╗██╔╝██║   ██║██╔════╝" + colors.reset + "             ║");
        console.log("║            " + colors.fg.yellow + "██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║███████╗" + colors.reset + "             ║");
        console.log("║            " + colors.fg.yellow + "██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║╚════██║" + colors.reset + "             ║");
        console.log("║            " + colors.fg.yellow + "██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝███████║" + colors.reset + "             ║");
        console.log("║            " + colors.fg.yellow + "╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝" + colors.reset + "             ║");
        console.log("║                                                                    ║");
        console.log("║                      Advanced Banking System                       ║");
        console.log("║                                                                    ║");
        console.log("╠════════════════════════════════════════════════════════════════════╣");
        console.log("║                                                                    ║");
        console.log("║               " + colors.fg.yellow + "1" + colors.reset + " - Criar Conta                                      ║");
        console.log("║               " + colors.fg.yellow + "2" + colors.reset + " - Listar todas as Contas                           ║");
        console.log("║               " + colors.fg.yellow + "3" + colors.reset + " - Buscar Conta por Número                          ║");
        console.log("║               " + colors.fg.yellow + "4" + colors.reset + " - Atualizar Dados da Conta                         ║");
        console.log("║               " + colors.fg.yellow + "5" + colors.reset + " - Apagar Conta                                     ║");
        console.log("║               " + colors.fg.yellow + "6" + colors.reset + " - Sacar                                            ║");
        console.log("║               " + colors.fg.yellow + "7" + colors.reset + " - Depositar                                        ║");
        console.log("║               " + colors.fg.yellow + "8" + colors.reset + " - Transferir valores entre Contas                  ║");
        console.log("║               " + colors.fg.yellow + "9" + colors.reset + " - Sair                                             ║");
        console.log("║                                                                    ║");
        console.log("╚════════════════════════════════════════════════════════════════════╝");
        
        console.log("\nEntre com a ação desejada: ");
        opcao = parseInt(input.question("", {limit: /^[0-9]+$/, limitMessage: "Entrada invalida! Por favor, digite apenas numeros."}));

        if (opcao == 9) {
            console.log(" \n               Nexus Banking - O" + colors.fg.yellow + " seu futuro " + colors.reset + "começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n                             " + colors.fg.yellow + "Criar Conta\n" + colors.reset);

                keyPress();
                break;

            case 2: 
                console.log("\n                       " + colors.fg.yellow + "Listar todas as Contas\n" + colors.reset);

                keyPress();
                break;
            
            case 3:
                console.log("\n                " + colors.fg.yellow + "Consultar dados da Conta - por número\n" + colors.reset);

                keyPress();
                break;

            case 4:
                console.log("\n                       " + colors.fg.yellow + "Atualizar dados da Conta\n" + colors.reset);

                keyPress();
                break;

            case 5:
                console.log("\n                           " + colors.fg.yellow + "Apagar uma Conta\n" + colors.reset);

                keyPress();
                break;

            case 6:
                console.log("\n                                " + colors.fg.yellow + "Saque\n" + colors.reset);
   
                keyPress();
                break;

            case 7:
                console.log("\n                               " + colors.fg.yellow + "Depósito\n" + colors.reset);

                keyPress();
                break;

            case 8:
                console.log("\n                      " + colors.fg.yellow + "Transferência entre Contas\n" + colors.reset);

                keyPress();
                break;

            default:
                console.log("\n             Opção Inválida!\n");

                keyPress();
                break;
        }
    }
}

// Função com Dados da Desenvolvedora

export function sobre(): void {
console.log("\n══════════════════════════════════════════════════════════════════════");
    console.log("                                                     ");
    console.log("                     Projeto  Desenvolvido por:              ");
    console.log("                           @ " + colors.fg.yellow + "Sofia Sabrina" + colors.reset + "                    ");
    console.log("                     " + colors.fg.yellow + "sofiasabrinasilva@gmail.com" + colors.reset + "             ");
    console.log("                       github.com/" + colors.fg.yellow + "sofiasbrinas" + colors.reset + "               ");
    console.log("                                                     ");
    console.log("══════════════════════════════════════════════════════════════════════");
}

// Função de Pausa entre as Opções do Menu

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    input.prompt();
}

main();