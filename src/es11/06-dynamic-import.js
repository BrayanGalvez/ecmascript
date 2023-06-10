// dynamic import
// es para importar modulos de forma dinamica, permite que la carga de modulos sea bajo demanda
const button = document.getElementById('btn');

button.addEventListener('click', async function() {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});