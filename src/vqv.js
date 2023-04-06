/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const verifyName = (name) => {
  if (name === '' || typeof name !== 'string') {
    throw new Error('Nome é obrigatorio e precisa ser um texto');
  }
};

const verifyAge = (age) => {
  if (typeof age !== 'number' || age === undefined) {
    throw new Error('Age é obrigatorio e precisa ser um numero');
  }
};

const vqv = (name, age) => {
  try {
    verifyName(name);
    verifyAge(age);
  
    return `Oi, meu nome é ${name}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  } catch (error) {
    return undefined;
  }
};

module.exports = vqv;