const chk =  document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

// Função para rolar de volta ao topo da página
function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores da Web
    document.documentElement.scrollTop = 0; // Para navegadores IE
}

// Exibir o botão "Voltar ao Topo" quando o usuário rolar para baixo
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTop").style.display = "flex";
    } else {
        document.getElementById("btnTop").style.display = "none";
    }
}