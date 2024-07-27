let notas = [];
const notaInput = document.getElementById("nota");
const calcNumBox = document.getElementById("calc-num-box");
const botaoAdd = document.getElementById("add");
const botaoCalc = document.getElementById("calc");
const result = document.getElementById("result");

botaoAdd.addEventListener("click", () => {
    const nota = parseFloat(notaInput.value);
    
    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        notas.push(nota);
        notaInput.value = '';
        atualizarListaNotas();
    } else if (nota < 0 || nota > 10 || isNaN(nota)) {
        alert('A nota digitada é inválida, por favor, insira uma nota válida.');
    } else if (notaInput.value === "") {
        alert("Por favor, insira uma nota");
    }
});

function atualizarListaNotas() {
    calcNumBox.innerHTML = '';

    notas.forEach((nota, index) => {
        const notaElemento = document.createElement('p');
        notaElemento.textContent = `A nota de número ${index + 1} é: ${nota}`;
        calcNumBox.appendChild(notaElemento);
    });
}

botaoCalc.addEventListener("click", () => {
    if (notas.length === 0) {
        alert('Nenhuma nota foi adicionada.');
        return;
    }

    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;
    result.value = media.toFixed(2);
});