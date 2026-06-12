import { colors } from "../util/Colors";
import { formatadorMoeda } from "../util/FormatadorMoeda";

export class Conta {

    // Atributos da Classe

    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Método Construtor

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}

    // Métodos Get e Set

	public get numero(): number {
		return this._numero;
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set numero(value: number) {
		this._numero = value;
	}

	public set agencia(value: number) {
		this._agencia = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set saldo(value: number) {
		this._saldo = value;
	}

    // Métodos Auxiliares

	public sacar(valor: number): boolean {

        if(valor <= 0){
            console.log(colors.fg.red, "\nOperação não pode ser concluída - O valor deve ser positivo", colors.reset);
            return false;
        }

        if (valor > this._saldo) {
            console.log(colors.fg.red, "\nOperação não pode ser concluída - Saldo Insuficiente!", colors.reset);
            return false;
        }

        this._saldo -= valor;
        console.log(colors.fg.green, `\nSaque no valor de ${formatadorMoeda.format(valor)} efetuado com sucesso.`, colors.reset);
        return true;
    }

    public depositar(valor: number): void {

        if(valor <= 0){
            console.log(colors.fg.red,"\nOperação não pode ser concluída - O valor deve ser positivo.", colors.reset);
        }else{
        this._saldo =  valor + this._saldo;
        console.log(colors.fg.green,`\nDepósito no valor de ${formatadorMoeda.format(valor)} efetuado com sucesso.`, colors.reset);
        }
    }

    public visualizar(): void {

        let tipo: string;

        switch(this._tipo) {

            case 1:
                tipo = "Conta Corrente";
                break;

            case 2:
                tipo = "Conta Poupança";
                break;
            default:
                tipo = "Tipo Inválido.";
                break;
        }

        console.log("\n\n╔════════════════════════════════════════════════════════════════════╗");
        console.log("║                                                                    ║");
        console.log("║                           DADOS DA CONTA                           ║");
        console.log("║                                                                    ║");
        console.log("╠════════════════════════════════════════════════════════════════════╣");
        console.log("║                                                                    ║");
        console.log(`║   Número da Conta:    ${this._numero}`.padEnd(69) + "║");
        console.log(`║   Agência:            ${this._agencia}`.padEnd(69) + "║");
        console.log(`║   Tipo da Conta:      ${tipo}`.padEnd(69) + "║");
        console.log(`║   Titular:            ${this._titular}`.padEnd(69) + "║");
        console.log(`║   Saldo:              ${formatadorMoeda.format(this._saldo)}`.padEnd(69) + "║");
        console.log("╚════════════════════════════════════════════════════════════════════╝\n\n");
        
    }
}