const formulario = document.querySelector('#formulario-gastos form');
const descripcion = formulario.descripcion;

const expRegDescripcion = /^[a-zA-Z0-9\_\- ]{4,30}$/;

descripcion.addEventListener('blur', (e) => {
    console.log('ejecuta');
})