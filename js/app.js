const cotizador = new API('7dd85c8002031516cf83a310e351afd6cf9fcf6b04b48d8cbac4b6f4f289481f');
const ui = new Interfaz();

// leer el formulario

const formulario = document.querySelector('#formulario');
// eventlistener
formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     // leer la moneda seleccionada
     const monedaSelect = document.querySelector('#moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

     // leer la criptomoneda seleccionada
     const criptoMonedaSelect = document.querySelector('#criptomoneda');
     const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
     
     // comprobar que ambos campos tengan algo seleccionado
     if(monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
          // arrojar una alerta de error
          ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
     } else {
          // todo bien, consultar la api
          cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada) 
               .then(data => {
                    ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada, criptoMonedaSeleccionada );
               })
     }


})