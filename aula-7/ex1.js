// Exeemplo de classe para autenticação

class Usuario
    // cria o construtor da classe
{
  constructor() {
    this.usuario = null;
    this.senha = null;
  }


  // método para definir usuário e senha
  autentica() {
    const usuario = "Senai";
    const senha = "senai@2023"
    if(this.usuario === usuario && this.senha === senha) {
        console.log("Login correto.");
    }
    else {
        console.log("Erro, tente novamente.");
  }
}
}

// Exemplo de uso da classe
user = new Usuario();
user.usuario = "Senai";
user.senha = "senai@2023";
user.autentica(); // Saída: Login incorreto.