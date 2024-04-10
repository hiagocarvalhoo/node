const express = require('express');
const router = express.Router();

router.post('/ex1', function (req, res) {
    const valoress = req.body.notas
    let soma = 0
    for (let n of valoress) {
        soma += n
    }
    const media = soma / valoress.length
    res.json({ media })
})

router.post('/ex2', function (req, res) {
    let valoress = []
    for (let i = 1; i < 101; i++) {
        valoress.push(i)
    }
    res.json({ valoress })
})

router.post('/ex3', function (req, res) {
    let valoress = []
    for (let i = 1; i < 11; i++) {
        valoress.push(i)
    }
    const mensagem = (`${valoress.join(', ')}`)
    res.json({ mensagem })
})

router.post('/ex4', function (req, res) {
    let valoress = [];
    for (let i = 1; i < 11; i++) {
        valoress.push(i);
    }
    valoress = valoress.sort((a, b) => b - a);
    const mensagem = `${valoress.join(', ')}`;
    res.json({ mensagem });
});

router.post('/ex5', function (req, res) {
    let valoress = [];
    for (let i = 101; i < 111; i++) {
        valoress.push(i);
    }
    const mensagem = `${valoress.join(', ')}`;
    res.json({ mensagem });
});

router.post('/ex6', function (req, res) {
    const valoress = req.body
    let soma = 0
    for (let valores = 0; valores < valoress.length; valores++) {
        soma += valoress[valores]
    }
    res.json({ soma });
});

router.post('/ex7', function (req, res) {
    const valores = req.body.valores;
    let valoress = [1];
    for (let i = 2; i <= valores; i += 2) {
        valoress.push(i);
    }
    if (valores % 2 != 0) {
        valoress.push(valores)
    }
    res.json({ valoress });
});

router.post('/ex8', function (req, res) {
    const valores = req.body.valores;
    let negativos = [];
    valores.forEach(valor => {
        valor = valor < 0 ? valor : negativos.push(valor);
    });
    res.json({ negativos });
});

router.post('/ex9', function (req, res) {
    const valores = req.body.valores;
    let negativos = [];
    valores.forEach(valor => {
        valor = valor < 0 ? negativos.push(valor) : valor;
    });
    res.json({ negativos });
});

router.post('/ex10', function (req, res) {
    const valores = req.body.valores;
    let dentroIntervalo = [];
    let foraIntervalo = [];
    valores.forEach(valor => {
        if (10 <= valor && valor <= 20) {
            dentroIntervalo.push(valor);
        } else {
            foraIntervalo.push(valor);
        }
    });
    res.json({ dentroIntervalo, foraIntervalo });
});

router.post('/ex11', function (req, res) {
    const valores = [21, 54, 98, 65, 87, 65, 21, 98, 87, 65]
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    const media = soma/valores.length
    res.json({ media });
})

router.post('/ex12', function (req, res) {
    const valores = req.body.valores
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    const media = soma/valores.length
    res.json({ media });
})

router.post('/ex13', function (req, res) {
    const numero = req.body.numero
    let tripoValores = []
    for (let i = 1; i < numero; i++) {
        tripoValores.push(i * 3)
    }
 
    res.json({ tripoValores });
})

router.post('/ex14', function (req, res) {
    const numeros = req.body.numeros;
    let dobros = [];
    for (let numero of numeros) {
        dobros.push(numero * 2);
    }
    res.json({ dobros });
});

router.post('/ex15', function (req, res) {
    const numeros = req.body.numeros;
    let soma = 0;
    for (let numero of numeros) {
        if (numero < 40) {
            soma += numero;
        }
    }
    res.json({ soma });
});

router.post('/ex16', function (req, res) {
    const estoque = req.body.estoque;
    const valores = req.body.valores;
    const totalEstoque = estoque * valores.reduce((acc, curr) => acc + curr, 0);
    const media = totalEstoque / estoque;
    res.json({ totalEstoque, media });
});

router.post('/ex17', function (req, res) {
    const inicio = req.body.inicio;
    const fim = req.body.fim;
    let impares = [];
    let somaImpares = 0;
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
            somaImpares += i;
        }
    }
    res.json({ impares, somaImpares });
});

router.post('/ex18', function (req, res) {
    const valores = req.body.valores;
    const maior = Math.max(...valores);
    const menor = Math.min(...valores);
    const media = valores.reduce((acc, curr) => acc + curr, 0) / valores.length;
    res.json({ maior, menor, media });
});

router.post('/ex19', function (req, res) {
    const dadosAlunos = req.body.dadosAlunos;
    let alunosPorCurso = {
        'Sistemas de Informação': 0,
        'Ciência da Computação': 0,
        'Engenharia Civil': 0
    };
    let alunos20a25 = {
        'Sistemas de Informação': 0,
        'Ciência da Computação': 0,
        'Engenharia Civil': 0
    };
    let totalAlunos = 0;
    let somaIdades = {
        'Sistemas de Informação': 0,
        'Ciência da Computação': 0,
        'Engenharia Civil': 0
    };

    for (let aluno of dadosAlunos) {
        totalAlunos++;
        alunosPorCurso[aluno.curso]++;
        somaIdades[aluno.curso] += aluno.idade;
        if (aluno.idade >= 20 && aluno.idade <= 25) {
            alunos20a25[aluno.curso]++;
        }
    }

    let menorMediaIdade = '';
    let menorMedia = Infinity;
    for (let curso in somaIdades) {
        const mediaIdade = somaIdades[curso] / alunosPorCurso[curso];
        if (mediaIdade < menorMedia) {
            menorMedia = mediaIdade;
            menorMediaIdade = curso;
        }
    }

    res.json({ alunosPorCurso, alunos20a25, menorMediaIdade });
});

router.post('/ex20', function (req, res) {
    let tabuada = {};
    for (let i = 1; i <= 10; i++) {
        let multiplicacoes = {};
        for (let j = 1; j <= 10; j++) {
            multiplicacoes[j] = i * j;
        }
        tabuada[i] = multiplicacoes;
    }
    res.json({ tabuada });
});

router.post('/ex21', function (req, res) {
    const respostas = req.body.respostas;
    let quantidadeDez = 0;
    let somaIdade = 0;
    let percentualBaixaNota = 0;
    let pessoaMaisVelha = { nome: '', idade: -Infinity };

    for (let resposta of respostas) {
        somaIdade += resposta.idade;
        if (resposta.nota === 10) {
            quantidadeDez++;
        }
        if (resposta.nota <= 5) {
            percentualBaixaNota++;
        }
        if (resposta.idade > pessoaMaisVelha.idade) {
            pessoaMaisVelha.nome = resposta.nome;
            pessoaMaisVelha.idade = resposta.idade;
        }
    }

    const mediaIdade = somaIdade / respostas.length;
    percentualBaixaNota = (percentualBaixaNota / respostas.length) * 100;

    res.json({ quantidadeDez, mediaIdade, percentualBaixaNota, pessoaMaisVelha });
});

router.post('/ex22', function (req, res) {
    const produtos = req.body.produtos;
    const precos = produtos.map(produto => produto.preco);
    const maiorPreco = Math.max(...precos);
    const mediaPrecos = precos.reduce((acc, curr) => acc + curr, 0) / produtos.length;
    res.json({ maiorPreco, mediaPrecos });
});

module.exports = router;

