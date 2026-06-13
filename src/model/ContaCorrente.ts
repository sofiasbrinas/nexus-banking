import { Conta } from "./Conta";
import { formatadorMoeda } from "../util/Currency";
import { Colors } from "../util/Colors";

export class ContaCorrente extends Conta {

    // Atributos específicos de Conta Corrente

    private _limite: number;

    // Constructor com a chamada para a Super Classe

	constructor(numero: number, agencia: number, tipo: number, titular: string,
        saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo); // Chama o Constructor da Super Classe
        this._limite = limite;
	}

    // Métodos GET e SET específicos da Classe Conta Corrente

	public get limite(): number {
		return this._limite;
	}

	public set limite(value: number) {
		this._limite = value;
	}
    
    // Método Sacar sobrescrito

    public sacar(valor: number): boolean {

        if(valor <= 0) {
            console.log(Colors.fg.red, "\n Operação não pode ser concluída - O valor deve ser positivo.", Colors.reset);
            return false;
        }

        if(valor > (this.saldo + this._limite)){
            console.log(Colors.fg.red,"\nOperação não pode ser concluída- Saldo Insuficiente!", Colors.reset);
            return false;
        }

        this.saldo -= valor;
        return true;
    }

    // Método Visualizar sobrescrito (polimorfismo)

    public visualizar(): void {
        super.visualizar();
        console.log(`║   Limite:             ${formatadorMoeda.format(this._limite)}`.padEnd(69) + "║");
        console.log("╚════════════════════════════════════════════════════════════════════╝");
    }
}