let operacaoSelecionada = '';

const selecionarOperacao = operacao => {
    operacaoSelecionada = operacao;
    document.querySelectorAll('.operacoes button').forEach(botao =>
        botao.classList.toggle('ativo', botao.getAttribute('data-operacao') === operacao)
    );
};

const calcular = () => {
    const [num1, num2] = ['num1', 'num2'].map(id => parseFloat(document.getElementById(id).value));
    const operacao = operacaoSelecionada;

    if ((operacao === 'fatorial' && (!Number.isInteger(num1) || num1 < 0)) || (operacao === 'dividir' && num2 === 0)) {
        alert(operacao === 'fatorial' ? 'Para calcular o fatorial, o primeiro número deve ser um inteiro não negativo.' : 'Não é possível dividir por zero.');
        return;
    }

    const resultado = {
        'adicionar': num1 + num2,
        'subtrair': num1 - num2,
        'multiplicar': num1 * num2,
        'dividir': num1 / num2,
        'fatorial': fatorial(num1)
    }[operacao];

    if (resultado !== undefined) {
        alert('Resultado: ' + resultado);
    } else {
        alert('Selecione uma operação.');
    }
};

const fatorial = n => n === 0 || n === 1 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc * curr);