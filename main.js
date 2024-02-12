const perguntas = [
    {
      pergunta: 'Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?',
      resposta: [
        "let",
        "var",
        "const",
        "def"
      ],
      correta: 0
    },
    {
      pergunta: 'Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?',
      resposta: [
        "push()",
        "pop()",
        "shift()",
        "unshift()"
      ],
      correta: 0
    },
    {
      pergunta: 'Qual função JavaScript é usada para imprimir algo no console do navegador?',
      resposta: [
        "log()",
        "print()",
        "console.log()",
        "write()"
      ],
      correta: 2
    },
    {
      pergunta: 'Qual dessas é uma estrutura de controle de fluxo em JavaScript?',
      resposta: [
        "if",
        "then",
        "do",
        "switch"
      ],
      correta: 0
    },
    {
      pergunta: 'Qual desses métodos é usado para converter uma string em um número em JavaScript?',
      resposta: [
        "toNumber()",
        "parseInt()",
        "parseNumber()",
        "stringToNumber()"
      ],
      correta: 1
    },
    {
      pergunta: 'Qual desses operadores é usado para verificar igualdade estrita em JavaScript?',
      resposta: [
        "=",
        "==",
        "===",
        "=="
      ],
      correta: 2
    },
    {
      pergunta: 'Qual desses métodos é usado para remover o último elemento de um array em JavaScript?',
      resposta: [
        "removeLast()",
        "splice()",
        "pop()",
        "slice()"
      ],
      correta: 2
    },
    {
      pergunta: 'Qual desses é um tipo de dado primitivo em JavaScript?',
      resposta: [
        "array",
        "object",
        "function",
        "string"
      ],
      correta: 3
    },
    {
      pergunta: 'Qual dessas estruturas de dados é usada para armazenar múltiplos valores em uma única variável em JavaScript?',
      resposta: [
        "array",
        "object",
        "string",
        "number"
      ],
      correta: 0
    },
    {
      pergunta: 'Qual desses métodos é usado para concatenar duas strings em JavaScript?',
      resposta: [
        "concat()",
        "merge()",
        "join()",
        "append()"
      ],
      correta: 0
    }
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizitem = template.content.cloneNode(true)
    quizitem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.resposta){
      const dt = quizitem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta - ' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      dt.querySelector('input').onchange = (event) =>{
        const correta = event.target.value == item.correta
        corretas.delete(item)
        if(correta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizitem.querySelector('dl').appendChild(dt)
    }
  
    quizitem.querySelector('dl dt').remove()
  
    // mostra a pergunta na tela
    quiz.appendChild(quizitem)
  }