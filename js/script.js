const nomeInput = document.getElementById("nome");
const adicionarInput = document.getElementById("adicionar");
const ordemInput = document.getElementById("ordenar");
const inverterInput = document.getElementById("inverter");
const lista = document.getElementById("lista");

let arrayNomes = [];

function renderizarLista() {
    lista.innerHTML = "";
    for (let x = 0; x < arrayNomes.length; x++) {
        const liElement = document.createElement("li");
        liElement.textContent = arrayNomes[x];
        lista.appendChild(liElement);
    }
}

adicionarInput.addEventListener('click', (event) => {
    event.preventDefault();
    const value = nomeInput.value;
    if (value !== undefined && value !== "") {
        nomeInput.value = "";
        arrayNomes.push(value);
        console.log(value);
        renderizarLista();
    }
});



ordemInput.addEventListener('click', () => {
    arrayNomes.sort();
    renderizarLista();

});

inverterInput.addEventListener('click', () => {
    arrayNomes.reverse();
    renderizarLista();

});

