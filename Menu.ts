import { Colors } from "./src/util/Colors";
import { Input } from "./src/util/Input";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";


// Cria um Objeto Global da Classe Conta Controller

const contas = new ContaController();

// Criar um Array contendo os tipos de conta
    
const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

export function main() {

    let opcao: number;

    // Cria contas de teste para validar a aplicação
    criarContasTeste();

    while(true){

        console.log("╔════════════════════════════════════════════════════════════════════╗");
        console.log("║                                                                    ║");
        console.log("║            " + Colors.fg.yellow + "███╗   ██╗███████╗██╗  ██╗██╗   ██╗███████╗" + Colors.reset + "             ║");
        console.log("║            " + Colors.fg.yellow + "████╗  ██║██╔════╝╚██╗██╔╝██║   ██║██╔════╝" + Colors.reset + "             ║");
        console.log("║            " + Colors.fg.yellow + "██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║███████╗" + Colors.reset + "             ║");
        console.log("║            " + Colors.fg.yellow + "██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║╚════██║" + Colors.reset + "             ║");
        console.log("║            " + Colors.fg.yellow + "██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝███████║" + Colors.reset + "             ║");
        console.log("║            " + Colors.fg.yellow + "╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝" + Colors.reset + "             ║");
        console.log("║                                                                    ║");
        console.log("║                      Advanced Banking System                       ║");
        console.log("║                                                                    ║");
        console.log("╠════════════════════════════════════════════════════════════════════╣");
        console.log("║                                                                    ║");
        console.log("║               " + Colors.fg.yellow + "1" + Colors.reset + " - Criar Conta                                      ║");
        console.log("║               " + Colors.fg.yellow + "2" + Colors.reset + " - Listar todas as Contas                           ║");
        console.log("║               " + Colors.fg.yellow + "3" + Colors.reset + " - Buscar Conta por Número                          ║");
        console.log("║               " + Colors.fg.yellow + "4" + Colors.reset + " - Atualizar Dados da Conta                         ║");
        console.log("║               " + Colors.fg.yellow + "5" + Colors.reset + " - Apagar Conta                                     ║");
        console.log("║               " + Colors.fg.yellow + "6" + Colors.reset + " - Sacar                                            ║");
        console.log("║               " + Colors.fg.yellow + "7" + Colors.reset + " - Depositar                                        ║");
        console.log("║               " + Colors.fg.yellow + "8" + Colors.reset + " - Transferir valores entre Contas                  ║");
        console.log("║               " + Colors.fg.yellow + "9" + Colors.reset + " - Buscar Conta por Nome do Titular                 ║");
        console.log("║               " + Colors.fg.yellow + "0" + Colors.reset + " - Sair                                             ║");
        console.log("║                                                                    ║");
        console.log("╚════════════════════════════════════════════════════════════════════╝");
        
        console.log("\nEntre com a ação desejada: ");
        opcao = parseInt(Input.question("", {limit: /^[0-9]+$/, limitMessage: "Entrada invalida! Por favor, digite apenas numeros."}));

        if (opcao === 0) {
            console.log(" \n               Nexus Banking - O" + Colors.fg.yellow + " seu futuro " + Colors.reset + "começa aqui!");
            
            sobre();

            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n                             " + Colors.fg.yellow + "Criar Conta\n" + Colors.reset);

                criarConta();

                keyPress();
                break;

            case 2: 
                console.log("\n                       " + Colors.fg.yellow + "Listar todas as Contas\n" + Colors.reset);

                listarTodasContas();

                keyPress();
                break;
            
            case 3:
                console.log("\n                " + Colors.fg.yellow + "Consultar dados da Conta - por número\n" + Colors.reset);

                buscarContaPorNumero();

                keyPress();
                break;

            case 4:
                console.log("\n                       " + Colors.fg.yellow + "Atualizar dados da Conta\n" + Colors.reset);

                atualizarConta();

                keyPress();
                break;

            case 5:
                console.log("\n                           " + Colors.fg.yellow + "Apagar uma Conta\n" + Colors.reset);

                deletarContaPorNumero();

                keyPress();
                break;

            case 6:
                console.log("\n                                " + Colors.fg.yellow + "Saque\n" + Colors.reset);

                sacar();

                keyPress();
                break;

            case 7:
                console.log("\n                               " + Colors.fg.yellow + "Depósito\n" + Colors.reset);

                depositar();

                keyPress();
                break;

            case 8:
                console.log("\n                      " + Colors.fg.yellow + "Transferência entre Contas\n" + Colors.reset);

                transferir();

                keyPress();
                break;
                
            case 9:
                console.log("\n                      " + Colors.fg.yellow + "Buscar Conta por Titular\n" + Colors.reset);

                procurarPorTitular();
                
                keyPress();
                break;
            
            default:
                console.log("\n             Opção Inválida!\n");

                keyPress();
                break;
        }
    }
}

// Opção 1: Cria uma nova conta (Corrente ou Poupança)

function criarConta(){

    console.log("Digite o número da agência: ")
    const agencia = Input.questionInt("");

    console.log("Selecione o tipo da conta: ")
    const tipo = Input.keyInSelect(tipoContas, "", { cancel: false}) + 1;

    console.log("Digite o nome do titular: ")
    const titular = Input.question("");

    console.log("Digite o saldo da conta: ")
    const saldo = Input.questionFloat("");

    switch(tipo){
        case 1: // Cria um objeto da classe Conta Corrente
            console.log("Digite o limite da conta: ");
            const limite = Input.questionFloat("");
            contas.cadastrar(new ContaCorrente(
                contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
        break;

        case 2: // Cria um objeto da classe Conta Poupança
            console.log("Digite o dia do aniversário da conta: ");
            const aniversario = Input.questionInt("");
            contas.cadastrar(new ContaPoupanca(
                contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
        break;

    }

}

// Opção 2: Lista todas as contas cadastradas

function listarTodasContas(): void{
    contas.listarTodas();
}

 // Opção 3: Busca uma conta pelo número

function buscarContaPorNumero(): void{

    // Solicita o número da conta

    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("");

    // Localiza a conta a partir do número

    contas.procurarPorNumero(numero);

}

/**
 * Opção 4: Atualiza os dados de uma conta existente e
 * permite manter os valores atuais pressionando Enter.
 */

function atualizarConta(): void{

    // Solicita o número da conta

    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("");

    // Verifica se a conta existe

    const conta = contas.buscarNoArray(numero);

    // Se a conta existir...

    if (conta !== null) {

        /**
         * Guarda os valores atuais da conta em variáveis
         * Exceto tipo que não será aramazenado em uma constante
         * porque não terá o seu valor modificado
         */

        let agencia: number = conta.agencia;
        const tipo: number = conta.tipo;
        let titular: string = conta.titular;
        let saldo: number = conta.saldo;

        /**
         * Atualização da Agência
         * 
         * 1. Exibe o valor atual da agência
         * 2. Se pressionar ENTER o valor atual será mantido
         * 3. Para o ENTER funcionar, passamos o parâmetro
         *    default Input, que indica o valor padrão (solução mais simples)
         * 4. Caso contrário o valor atual será substituído
         * 5. Como estamos usando o  método questionInt, 
         *    a validação dos dados está garantida
         * 
         * Os demais atributos seguirão a mesma lógica, alterando
         * apenas a função de Input, de acordo com o tipo.
         */

        console.log(`\nAgência atual: ${agencia}`);
        console.log("Digite o novo número da agência: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        agencia = Input.questionInt("", { defaultInput: agencia });

        // Atualização da Titular

        console.log(`\nTitular atual: ${titular}`);
        console.log("Digite o novo nome do titular: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        titular = Input.question("", { defaultInput: titular });

        // Atualização do Saldo
        console.log(`\nSaldo atual: ${saldo}`);
        console.log("Digite o valor do novo saldo: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        saldo = Input.questionFloat("", { defaultInput: saldo });

        // Atualização do Tipo

        switch(tipo){
            case 1: // Conta Corrente
                
                /**
                 * Como o objeto 'conta' é do tipo genérico Conta, 
                 * precisamos converter o objeto (casting) para o tipo 
                 * ContaCorrente.
                 * Isso é necessário porque apenas a classe ContaCorrente 
                 * possui o atributo 'limite'.
                 * Após o casting, conseguimos acessar o atributo limite.
                 * O mesmo será feito com o atributo aniversario da classe
                 * ContPoupanca
                 */

                let limite: number = (conta as ContaCorrente).limite;

                // Atualização do Limite

                console.log(`\nLimite atual: ${limite}`);
                console.log("Digite o valor do novo limite: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                limite = Input.questionFloat("", { defaultInput: limite });

                 /**
                 * Na atualização não utilizamos o método gerarNumero() no atributo 'numero'.
                 * O número da conta já existe e identifica unicamente essa conta.
                 * 
                 * Se chamarmos o método 'gerarNumero()', um novo número seria criado e 
                 * substituiria o antigo, o que impediria a atualização dos dados.
                 * 
                 * O mesmo vale para a classe ContaPoupanca
                 */

                contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
            break;

            case 2: // Conta Poupança
                    
                let aniversario: number = (conta as ContaPoupanca).aniversario;

                // Atualização do Aniversário

                console.log(`\nAniversário Atual: ${aniversario}`);
                console.log("Digite o novo dia do aniversário: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                aniversario = Input.questionInt("", { defaultInput: aniversario });

                contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));

            break;
        }

    }else{
        console.log(Colors.fg.red, `A conta número ${numero} não foi encontrada!`, Colors.reset);
    }
}


// Opção 5: Apaga uma conta do sistema

function deletarContaPorNumero(): void{

    // Solicita o número da conta

    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("");
    
    // Verifica se a conta existe

    const conta = contas.buscarNoArray(numero);

    // Se a conta existir...

    if(conta !== null){
        
        // Exibe a mensagem de confirmação da exclusão (Yes ou No)

        console.log(Colors.fg.whitestrong, 
            `\nTem certeza que deseja deletar a conta número ${numero} [y/n]?`, Colors.reset);
        const confirma = Input.keyInYNStrict("");

        // Se cofirmar (y), deleta a conta

        if (confirma)
            contas.deletar(numero);
        else
            console.log(Colors.fg.red,"\nOperação cancelada!", Colors.reset);
    

    }else{
        console.log(Colors.fg.red, `A conta número ${numero} não foi encontrada!`, Colors.reset);
    }

}

function sacar(): void{

    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("");
    
    const conta = contas.buscarNoArray(numero);

    if(conta !== null){
        console.log("Digite o valor do saque: ");
        const valor = Input.questionFloat("");

        contas.sacar(numero, valor);
    }else{
        console.log(Colors.fg.red, `A conta número ${numero} não foi encontrada!`, Colors.reset);
    }
}

function depositar(): void{

    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("");
    
    const conta = contas.buscarNoArray(numero);

    if(conta !== null){
        console.log("Digite o valor do depósito: ");
        const valor = Input.questionFloat("");

        contas.depositar(numero, valor);
    }else{
        console.log(Colors.fg.red, `A conta número ${numero} não foi encontrada!`, Colors.reset);
    }
}

function transferir(): void{

    console.log("Digite o número da Conta de Origem: ");
    const numeroOrigem = Input.questionInt("");
    
    console.log("Digite o número da Conta de Destino: ");
    const numeroDestino = Input.questionInt("");

    const contaOrigem = contas.buscarNoArray(numeroOrigem);
    const contaDestino = contas.buscarNoArray(numeroDestino);

    if(contaOrigem === null){

        console.log(Colors.fg.red, `A Conta de Origem número ${numeroOrigem} não foi encontrada!`, Colors.reset);

    }else if(contaDestino === null)    {

        console.log(Colors.fg.red, `A Conta de Destino número ${numeroDestino} não foi encontrada!`, Colors.reset);

    }else{
        console.log("Digite o valor da Transferência: ");
        const valor = Input.questionFloat("");

        contas.transferir(numeroOrigem, numeroDestino, valor);
    }
}

function procurarPorTitular(): void{

    // Solicita o nome do titular

    console.log("Digite o Nome do Titular: ");
    const titular = Input.question("");

    // Localiza a conta a partir do nome do titular

    contas.procurarPorTitular(titular);
}

// Função com Dados da Desenvolvedora

export function sobre(): void {
console.log("\n══════════════════════════════════════════════════════════════════════");
    console.log("                                                     ");
    console.log("                     Projeto  Desenvolvido por:              ");
    console.log("                           @ " + Colors.fg.yellow + "Sofia Sabrina" + Colors.reset + "                    ");
    console.log("                     " + Colors.fg.yellow + "sofiasabrinasilva@gmail.com" + Colors.reset + "             ");
    console.log("                       github.com/" + Colors.fg.yellow + "sofiasbrinas" + Colors.reset + "               ");
    console.log("                                                     ");
    console.log("══════════════════════════════════════════════════════════════════════");
}

// Função de Pausa entre as Opções do Menu

function keyPress(): void {
    console.log(Colors.reset, "");
    console.log(Colors.fg.yellow, "\nPressione enter para continuar...", Colors.reset);
    Input.prompt();
}

/** Função para insirir objetos das Classes Conta Corrente e Conta Poupança
 *  no sistema, para realizar testes.
*/

function criarContasTeste(): void{
    
    // Instâncias da Classe ContaCorrente

    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));

    // Instâncias da Classe ContaPoupança

    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));

}
main();