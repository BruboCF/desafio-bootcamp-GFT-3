// Criando a classe
class hero {
    constructor(name, age, type, weapon) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.weapon = weapon;
    }

    typeAttack(type, attack) {
        return `${type} atacou usando ${attack}`;
    }

    write() {
        let message = this.typeAttack(this.type, this.weapon);
        console.log(message);
    }
}

// Instanciando os objetos
let heroes = [
    new hero("Osvaldo", 67, "Guerreiro", "espada"),
    new hero("Madeline", 21, "Maga", "magia"),
    new hero("Klavicula", 38, "Lutador", "artes marciais"),
    new hero("Lydia", 30, "Ninja", "shuriken")
]

// Escrevendo
for(i in heroes) {
    heroes[i].write();
}