// Exemplo 2 - classe e construtor com parâmetros

class Usuario {
    // cria o construtor da classe
    constructor() {
        this.nome;
        this.login;
        this.senha;
        this.cpf;
        this.celular;


    }
    // criação do método para exibir informações
    exibir_infor(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Login: ${this.login}`);
        console.log(`Senha: ${this.senha}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Celular: ${this.celular}`);
    }


    verifica_login(user, senha) {
        if(user === this.login && senha === this.senha) {
            console.log("Login correto.");
        }
        else {
            console.log("Login incorreto! Tente novamente.");
        }
    }
}

usuario1 = new Usuario(); // cria o objeto usuario1 a partir da classe Usuario

// definindo os atributos do objeto usuario1
usuario1.nome = "Daniel";
usuario1.login = "Daniel";
usuario1.senha = "1234";
usuario1.cpf = "123.456.789-00";
usuario1.celular = "(19) 91234-5678";
usuario1.exibir_infor(); // exibe as informações do objeto usuario1 (todas indefinidas)
usuario1.verifica_login("Daniel", "1234"); // Saída: Login correto.
usuario1.verifica_login("Daniel", "4321"); // Saída: Login incorreto! Tente novamente.

usuario2 = new Usuario(); // cria o objeto usuario2 a partir da classe Usuario

// definindo os atributos do objeto usuario2
usuario2.nome = "Lando";
usuario2.login = "Lando";
usuario2.senha = "abcd";
usuario2.cpf = "987.654.321-00";
usuario2.celular = "(19) 98765-4321";
usuario2.exibir_infor(); // exibe as informações do objeto usuario2 (todas indefinidas)
usuario2.verifica_login("Lando", "abcd"); // Saída: Login correto.
usuario2.verifica_login("Lando", "dcba"); // Saída: Login incorreto! Tente novamente.
