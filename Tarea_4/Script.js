const inputBusqueda = document.getElementById('inputBusqueda');
const tarjetas = document.querySelectorAll('.tarjeta');

inputBusqueda.addEventListener('input', (e) => {
    const textoBusqueda = e.target.value.toLowerCase().trim();

    tarjetas.forEach(tarjeta => {
        const nombre = (tarjeta.getAttribute('data-nombre') || '').toLowerCase();
        
        if (nombre.includes(textoBusqueda)) {
            tarjeta.style.display = 'flex';
        } else {
            tarjeta.style.display = 'none';
        }
    });
});