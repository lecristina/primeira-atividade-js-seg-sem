//variáveia

const nomeInput = document.getElementById("nome");
const adicionarInput = document.getElementById("adicionar");
const ordemInput = document.getElementById("ordenar");
const inverterInput = document.getElementById("inverter");
const lista = document.getElementById("lista");

//array/lista de nomes
let arrayNomes = [];

//function para atualizar a lista
function renderizarLista() {
    lista.innerHTML = ""; //pega a lista e manipula o HTML dela
    for (let x = 0; x < arrayNomes.length; x++) {  //estrutura for
        const li = document.createElement("li"); //cria variável para criar um elemento li
        li.textContent = arrayNomes[x]; //pega o conteudo da li e adiciona os nomes informados
        lista.appendChild(li); //gera um filho li dentro dele, para adicionar mais nomes
    }
}

adicionarInput.addEventListener('click', (event) => {  //adiciona um evento de click
    event.preventDefault(); // previne que a pagina atualize
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




