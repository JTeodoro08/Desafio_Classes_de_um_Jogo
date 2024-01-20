// # 3️ Escrevendo as classes de um Jogo

class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    atacar(){
        
        let ataque = "";
    
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
    
            case "ninja":
                ataque = "shuriken";
                break;
    
            case "guerreiro":
                ataque = "espada";
                break;
    
            case "monge":
                ataque = "artes marciais";
                break;
    
            default:
                ataque = "ataque falso";
            }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}!`);
       
    }
    
}
const ninja = new Heroi("Kotaro",  45, "ninja");
const guerreiro = new Heroi("Sparta", 48, "guerreiro");
const mago = new Heroi ("Mestre Sung", 77, "mago");
const monge = new Heroi ("Saidusu", 89, "monge");


  ninja.atacar();
  guerreiro.atacar(); 
  mago.atacar();
  monge.atacar();

