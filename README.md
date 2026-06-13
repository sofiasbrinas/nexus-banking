# Nexus Banking - TypeScript & POO

## Simulador Educacional de Sistema Bancário | Portfólio Profissional

<br />

<div align="center">
  <img src="https://i.imgur.com/izFuHID.png" title="source: imgur.com" width="35%"/>
</div>

<br />

<div align="center">
  <img src="https://img.shields.io/github/languages/top/sofiasbrinas/nexus-banking?style=flat-square" />
  <img src="https://img.shields.io/github/repo-size/sofiasbrinas/nexus-banking?style=flat-square" />
  <img src="https://img.shields.io/github/languages/count/sofiasbrinas/nexus-banking?style=flat-square" />
  <img src="https://img.shields.io/github/last-commit/sofiasbrinas/nexus-banking?style=flat-square" />
  <img src="https://img.shields.io/github/issues/sofiasbrinas/nexus-banking?style=flat-square" />
  <img src="https://img.shields.io/github/issues-pr/sofiasbrinas/nexus-banking?style=flat-square" />
  <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen" alt="Status: Concluído">
</div>

---

<br />

O **Nexus Banking** é um projeto **educacional** desenvolvido em **TypeScript**, com foco em **Programação Orientada a Objetos (POO)** e **arquitetura modular**, simulando operações bancárias reais como **CRUD de contas, transferências, depósitos e saques**. O sistema conta com uma interface CLI estilizada com arte ASCII, suporte a cores no terminal e leitura de dados com suporte completo a acentuação no Windows.

**Objetivo:** Demonstrar **organização, domínio técnico, modelagem de domínio e boas práticas de engenharia de software** em um case prático de portfólio.

<br />

> [!WARNING]
>
> Este projeto possui **fins educacionais** e **não representa um sistema bancário real**. Foi desenvolvido para **aprendizado, demonstração técnica e portfólio profissional**.

<br />

Este projeto foi estruturado para:

- Demonstrar **competência técnica em TypeScript**
- Aplicar **POO em um cenário realista**
- Evidenciar **arquitetura limpa e organização de código**
- Simular **regras de negócio financeiras**
- Servir como **case técnico para recrutadores**

<br />

## Competências Técnicas Demonstradas

- Programação Orientada a Objetos (Encapsulamento, Herança, Polimorfismo)
- Modelagem de domínio orientada a objetos
- Arquitetura em camadas (**Model, Repository, Controller**)
- Interfaces TypeScript como contratos de implementação
- Tipagem forte com **TypeScript** e modo `strict`
- Separação de responsabilidades
- Boas práticas de código e organização modular
- Simulação de regras financeiras com validações de saldo e limite
- Validação de entradas e controle de fluxo
- Interface CLI estilizada com arte ASCII e cores ANSI
- Compatibilidade de encoding (CP850/UTF-8) para Windows
- Estrutura pronta para evolução futura (API, DB, testes)

<br />

## Funcionalidades do Projeto

| Funcionalidade                  | Status |
| ------------------------------- | ------ |
| Criar conta bancária            | ✅     |
| Listar todas as contas          | ✅     |
| Buscar conta por número         | ✅     |
| Buscar conta por titular        | ✅     |
| Atualizar dados da conta        | ✅     |
| Apagar conta                    | ✅     |
| Sacar                           | ✅     |
| Depositar                       | ✅     |
| Transferência entre contas      | ✅     |
| Conta Corrente com limite       | ✅     |
| Conta Poupança com aniversário  | ✅     |
| Formatação monetária (BRL)      | ✅     |
| Suporte a acentuação no Windows | ✅     |
| Interface CLI interativa        | ✅     |
| Arte ASCII e cores no terminal  | ✅     |

<br />

## Diagrama de Classes

```mermaid
classDiagram
class Conta {
  - _numero: number
  - _agencia: number
  - _tipo: number
  - _titular: string
  - _saldo: number
  + get numero() number
  + get agencia() number
  + get tipo() number
  + get titular() string
  + get saldo() number
  + set numero(value: number) void
  + set agencia(value: number) void
  + set tipo(value: number) void
  + set titular(value: string) void
  + set saldo(value: number) void
  + sacar(valor: number) boolean
  + depositar(valor: number) void
  + visualizar() void
}
class ContaCorrente {
  - _limite: number
  + get limite() number
  + set limite(value: number) void
  + sacar(valor: number) boolean
  + visualizar() void
}
class ContaPoupanca {
  - _aniversario: number
  + get aniversario() number
  + set aniversario(value: number) void
  + visualizar() void
}
class ContaRepository {
  <<interface>>
  + procurarPorNumero(numero: number) void
  + listarTodas() void
  + cadastrar(conta: Conta) void
  + atualizar(conta: Conta) void
  + deletar(numero: number) void
  + procurarPorTitular(titular: string) void
  + sacar(numero: number, valor: number) void
  + depositar(numero: number, valor: number) void
  + transferir(numeroOrigem: number, numeroDestino: number, valor: number) void
}
class ContaController {
  - listaContas: Array~Conta~
  + numero: number
  + procurarPorNumero(numero: number) void
  + listarTodas() void
  + cadastrar(conta: Conta) void
  + atualizar(conta: Conta) void
  + deletar(numero: number) void
  + procurarPorTitular(titular: string) void
  + sacar(numero: number, valor: number) void
  + depositar(numero: number, valor: number) void
  + transferir(numeroOrigem: number, numeroDestino: number, valor: number) void
  + gerarNumero() number
  + buscarNoArray(numero: number) Conta
}
class Input {
  - configurado: boolean$
  - encodingConsole: string$
  - detectarEncoding()$ void
  - converterParaConsole(texto: string)$ string
  - converterDoConsole(textoRaw: string)$ string
  - prepararConfig(config?: any)$ any
  + question(pergunta: string, config?: any)$ string
  + questionInt(pergunta: string, config?: any)$ number
  + questionFloat(pergunta: string, config?: any)$ number
  + keyInSelect(opcoes: string[], pergunta: string, config?: any)$ number
  + keyInYNStrict(pergunta: string, config?: any)$ boolean
  + prompt()$ void
  + getEncoding()$ string
}
ContaCorrente --|> Conta
ContaPoupanca --|> Conta
ContaController ..|> ContaRepository
ContaController --> Conta
```

<br />

## Arquitetura do Projeto

Estrutura organizada para facilitar **manutenção, escalabilidade e leitura técnica**:

```text
📦 nexus-banking
 ┣ 📂 docs
 ┃ ┗ 📄 classe_input.md        # Documentação da Classe Input
 ┣ 📂 src
 ┃ ┣ 📂 controller             # Regras de aplicação
 ┃ ┃ ┗ 📄 ContaController.ts   # Implementa ContaRepository
 ┃ ┣ 📂 model                  # Entidades de domínio
 ┃ ┃ ┣ 📄 Conta.ts             # Classe base (Super Classe)
 ┃ ┃ ┣ 📄 ContaCorrente.ts     # Herda Conta, adiciona limite
 ┃ ┃ ┗ 📄 ContaPoupanca.ts     # Herda Conta, adiciona aniversário
 ┃ ┣ 📂 repository             # Contrato de persistência
 ┃ ┃ ┗ 📄 ContaRepository.ts   # Interface com métodos CRUD e bancários
 ┃ ┗ 📂 util                   # Utilitários e helpers
 ┃   ┣ 📄 Colors.ts            # Cores ANSI para o terminal
 ┃   ┣ 📄 Currency.ts          # Formatação monetária BRL
 ┃   ┗ 📄 Input.ts             # Leitura de dados com suporte a acentos
 ┣ 📜 Menu.ts                  # Ponto de entrada principal
 ┣ 📜 package.json
 ┗ 📜 tsconfig.json
```

<br />

## Tecnologias Utilizadas

**Linguagem & Runtime**

- TypeScript (modo `strict`, `nodenext`, `esnext`)
- Node.js
- ts-node

**Bibliotecas**

- readline-sync `^1.4.10` — input interativo no terminal
- iconv-lite `^0.7.2` — conversão de encoding CP850/UTF-8
- @types/node `^25.9.3` — tipagens do Node.js

**Ferramentas & Qualidade**

- Git & GitHub
- Mermaid (diagramas UML)
- CLI interativa com cores ANSI (terminal)

<br />

## Como Executar

**1️⃣ Clone o repositório**

```bash
git clone https://github.com/sofiasbrinas/nexus-banking.git
```

**2️⃣ Acesse a pasta do projeto via terminal**

```bash
cd nexus-banking
```

**3️⃣ Instale as dependências**

```bash
npm install
```

**4️⃣ Execute a aplicação**

```bash
ts-node Menu.ts
```

<br />

## Implementações Futuras

- [ ] Persistência com banco de dados
- [ ] Testes automatizados (Jest)
- [ ] API REST com NestJS
- [ ] Interface Web (React)
- [ ] Dockerização
- [ ] CI/CD com GitHub Actions

<br />

## Contribuições

Sugestões, melhorias e pull requests são bem-vindos.

Você pode contribuir com:

- Melhorias arquiteturais
- Refatorações
- Testes automatizados
- Documentação

<br />

## Licença

Este projeto está sob licença **MIT** — livre para uso educacional e profissional.

<br />

## Autor

**Sofia — Desenvolvedora Full Stack**

🔗 **GitHub:** https://github.com/sofiasbrinas

🔗 **LinkedIn:** https://www.linkedin.com/in/sofia-sabrina-silva

Projeto desenvolvido para **aprendizado contínuo**, **demonstração técnica** e **portfólio profissional**.