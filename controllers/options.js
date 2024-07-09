// arreglo con el menú de opciones
let options = ['a', 'b', 'c'];
// obteniendo del dom donde renderizar las optiones
let doc_option = document.getElementById('options-sidebar');

const loadOptions = () => {
    doc_option.innerHTML = ``;
    // renderizando al dom
    options.forEach((option) => {
        doc_option.innerHTML += `<li><a href="">${option}</a></li>`;
    });
}

// evento para crear input en menú de optiones para agregar
document.getElementById('add-option').addEventListener('click', () => {
    // obtener el elemento (textbox) para verificar sí se ha agregado
    let doc_input = document.getElementById('option-input');
    // verificar sí se ha agrregado antes textbox
    if (!doc_input) {
        // agregando textbox a la parte de options
        doc_option.innerHTML += `
        <div class="input-group mb-3" id="option-input">
            <input type="text" class="form-control" placeholder="option" id="new-option">
            <button class="btn btn-outline-success" type="button" id="button-add-option">
                <span class="bold">+</span>
            </button>
        </div>`;
    }

    // evento para agregar nueva opción al listado
    document.getElementById('button-add-option').addEventListener('click', () => {
        // obtener el texto del textobox
        let newoption = document.getElementById('new-option').value;
        // verificando sí se ha agregado texto al input
        if (newoption) {
            // agregar a la lista y cargar
            options.push(newoption);
            // volver a cargar lista -> remover input
            loadOptions();
        }
    })
})



// evento al cargar dom de la página web
addEventListener('DOMContentLoaded', () => {
    loadOptions();
})