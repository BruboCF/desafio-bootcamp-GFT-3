# Criando Classes de um Herói ⚔️☄️
Projeto de código realizado durando o bootcamp **[GFT Start #6 - Lógica de Programação](https://web.dio.me/track/gft-start-logica-de-programacao)** na plataforma **[DIO](https://web.dio.me/home)**.

### O desafio tem o intuito de praticar a Lógica de Programação em `JavaScript`, utilizando:
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Objetos e Classes

## Lógica do código 💻

Criar uma classe genérica de um herói, nela será ser armazenada:
- Nome
- Idade
- Tipo de Herói
- Arma

Alem disso, a classe também conta com duas outras funções.

1ª Função = `typeAttack()`
- Retorna como o herói usa seu ataque.

2ª Função = `write()`
- Chama e escreve o retorno de funções.

## Metodologia utilizada 📝

Após a criação da classe `hero` e do todo seu conteúdo, foi criado um **vetor** chamado `heroes`. Esse vetor armazena toda nova **instância** da classe hero. Então, sempre que se desejar criar um novo herói, é só adiciona-lo dentro do vetor `heroes`.

Por fim, usei um laço de repetição `for...in` para escrever todo o conteúdo do vetor `heroes`. Esse loop percorre cada posição do vetor `heroes`, chamando a função `write()` para cada uma, assim o seu conteúdo é exibido no console.