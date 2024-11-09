// Função para enviar mensagem no WhatsApp
document.getElementById('sendMessage').addEventListener('click', function() {
    const message = 
        "       *TEU OLHAR*\n \n" +
        "Teu olhar brilha como o amanhecer,\n" +
        "um sol nascente que insiste em me aquecer.\n" +
        "Em cada brilho, um segredo a revelar,\n" +
        "um mundo inteiro que me convida a ficar.\n \n" +
        "É como estrela a guiar na noite escura,\n" +
        "uma luz suave, doce e pura.\n" +
        "Olhar que fala, mesmo sem dizer,\n" +
        "me envolve inteiro, me faz renascer.\n \n" +
        "Brilha tão forte, mas também é calma,\n" +
        "como o reflexo da paz na alma.\n" +
        "Em teus olhos, encontro o meu lugar,\n" +
        "um lar seguro, onde posso sonhar.\n \n" +
        "E assim, no encanto do teu olhar,\n" +
        "me perco e me acho, num eterno navegar.";

    const phone = "5515998348878"; 

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});

// Função para exibir o poema
document.getElementById('showPoem').addEventListener('click', function() {
    const poem = document.getElementById('poem');
    poem.style.display = poem.style.display === 'none' ? 'block' : 'none';
});

// Iniciar a música a partir de 1 minuto e 10 segundos (70 segundos)
const music = document.getElementById('music');
music.addEventListener('loadedmetadata', function() {
    music.currentTime = 70;
});
