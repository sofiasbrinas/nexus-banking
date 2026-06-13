import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {

	// Atributos específicos de Conta Poupança

    private _aniversario: number;

	// Constructor com a chamada para a Super Classe

	constructor(numero: number, agencia: number, tipo: number, titular: string,
        saldo: number, aniversario: number) {
        super(numero, agencia, tipo, titular, saldo); // Chama o Constructor da Super Classe
		this._aniversario = aniversario;
	}

	// Métodos GET e SET específicos da Classe Conta Poupança

	public get aniversario(): number {
		return this._aniversario;
	}

	public set aniversario(value: number) {
		this._aniversario = value;
	}

	// Método Visualizar Sobrescrito (polimorfismo)
    
    public visualizar(): void {
        super.visualizar();
        console.log("║   Dia do Aniversário: " + this._aniversario.toString().padEnd(45) + "║");
        console.log("╚════════════════════════════════════════════════════════════════════╝");
    }
}