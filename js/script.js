
//const formInput = document.getElementById("form");
const capturaNomeInput = document.getElementById("nome");
//const adicionarNomeInput = document.getElementById("adicionar");
const inverterInput = document.getElementById("inverter");
const alfabeticoInput = document.getElementById("ordem");
//const listaInput = document.getElementById("lista");


let nome = [];

capturaNomeInput.addEventListener('submit', (event) => {
    event.preventDefault();
    const valor = capturaNomeInput.value;
    if (valor) {
        nome.push(valor);
        console.log(nome)
    }
});

alfabeticoInput.addEventListener('click', (event) => {
    event.preventDefault();
    if (nome != "") {
        nome.sort();
        console.log(nome)
    }
});

inverterInput.addEventListener('click',(event) =>{
    event.preventDefault();
    if (nome != "") {
        nome.reverse();
        console.log(nome)

    }
});