const express = require('express');
const router = express.Router();

router.post('/ex1', function (req, res) {

    const { salario } = req.body

    let salarioReajustado = 0

    if (salario > 2000) {
        salarioReajustado = salario * 1.3
    } else {
        salarioReajustado = salario * 1.5
    }

    res.json({ salarioReajustado })

})

router.post('/ex2', function (req, res) {

    const { n1, n2, n3 } = req.body

    let numeroMaior = 0

    if (n1 > n2 && n1 > n3) {
        numeroMaior = n1
    } else if (n2 > n1 && n2 > n3) {
        numeroMaior = n2
    } else {
        numeroMaior = n3
    }

    res.json({ numeroMaior })

})

router.post('/ex3', function (req, res) {

    const { quantPessoas, quantCoberturas, quantChopps } = req.body

    chopp = 4.8
    pizzaGrande = 17
    cobertura = 1.5

    const valorTotal = (quantChopps * chopp) + (pizzaGrande + (cobertura * quantCoberturas))
    const valorTotalGarcom = ((quantChopps * chopp) + (pizzaGrande + (cobertura * quantCoberturas))) * 1.1
    const pagamentoIndividualGarcom = (valorTotal / quantPessoas) * 1.1
    const pagamentoIndividualComum = valorTotal / quantPessoas

    res.json({
        quantPessoas,
        valorTotal,
        pagamentoIndividualComum,
        valorTotalGarcom,
        pagamentoIndividualGarcom
    })

})



router.post('/ex4', function (req, res) {

    const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body

    const valorHoraTrabalhada = salarioMinimo * 0.2
    const salarioMes = valorHoraTrabalhada * horasTrabalhadas
    const valorDependente = dependentes * 32
    const valorHoraExtra = valorHoraTrabalhada * 1.5 * horasExtras
    const salarioBruto = salarioMes + valorDependente + valorHoraExtra

    let imposto = 0

    if (salarioBruto > 2000) {
        imposto = salarioBruto >= 5000 ? salarioBruto * 0.2 : salarioBruto * 1
    }

    const salarioLiquido = salarioBruto - imposto
    const gratificacao = salarioLiquido < 3500 ? 1000 : 500
    const salarioReceber = salarioLiquido + gratificacao

    res.json({
        valorHoraTrabalhada,
        salarioMes,
        valorDependente,
        valorHoraExtra,
        salarioBruto,
        salarioLiquido,
        gratificacao,
        salarioReceber
    })
})

router.post('/ex5', function (req, res) {

    const { numeroIdentificacao, nota1, nota2, nota3, mediaExercicios } = req.body

    const mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7

    let mensagem = ''

    if (mediaAproveitamento >= 6) {
        mensagem = 'Aprovado'
    } else {
        mensagem = 'Reprovado'
    }

    res.json({
        numeroIdentificacao,
        nota1,
        nota2,
        nota3,
        mediaExercicios,
        mediaAproveitamento,
        mensagem
    })

})

router.post('/ex6', function (req, res) {

    const { genero, altura } = req.body

    let peso = 0

    if (genero == 'M') {
        peso = (72.7 * altura) - 58
    } else if (genero == 'F') {
        peso = (62.1 * altura) - 44.7
    }

    res.json({ genero, peso })

})

router.post('/ex7', function (req, res) {

    const { n1, n2, n3 } = req.body

    let soma = 0

    if (n1 > n3 && n2 > n3) {
        soma = n1 + n2
    } else if (n2 > n1 && n3 > n1) {
        soma = n2 + n3
    } else {
        soma = n1 + n3
    }

    res.json({ soma })
})

router.post('/ex8', function (req, res) {

    const { salario, codigo } = req.body

    let salarioAjustado = 0

    if (codigo == '101') {
        salarioAjustado = salario * 1.05
    } else if (codigo == '102') {
        salarioAjustado = salario * 1.075
    } else if (codigo == '103') {
        salarioAjustado = salario * 1.1
    } else {
        salarioAjustado = salario * 1.15
    }

    const diferencaSalario = salarioAjustado - salario

    res.json({salario, salarioAjustado, diferencaSalario})

})

module.exports = router