function say(){
    alert("oi")
}


document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Impede o menu padrão de aparecer
    const customMenu = document.getElementById('custom-menu');

    // Define a posição do menu personalizado
    customMenu.style.top = `${event.pageY}px`;
    customMenu.style.left = `${event.pageX}px`;
    customMenu.classList.remove('hidden'); // Mostra o menu
});