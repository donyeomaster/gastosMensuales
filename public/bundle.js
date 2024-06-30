'use strict';

const boton = document.getElementById('toggle-form-gasto');
const formularioGasto = document.getElementById('formulario-gasto');
// colocar la animacion al boton verde, abrir formulario
const abrirFormularioGastos = () => {
    boton.classList.add('agregar-gasto__btn--active');
    formularioGasto.classList.add('formulario-gasto--active');
};

//funcion para cerrar el formulario y volver el boton al estado anterior
const cerrarFormularioGastos = () => {
    boton.classList.remove('agregar-gasto__btn--active');
    formularioGasto.classList.remove('formulario-gasto--active');
};

boton.addEventListener('click', (e) => {
    if ([...formularioGasto.classList].includes('formulario-gasto--active')){
        cerrarFormularioGastos();
    } else {
    abrirFormularioGastos();
    }
});

const formulario = document.querySelector('#formulario-gastos form');
const descripcion = formulario.descripcion;

descripcion.addEventListener('blur', (e) => {
    console.log('ejecuta');
});
//# sourceMappingURL=bundle.js.map
