document.addEventListener('DOMContentLoaded', function() {
    aula = document.querySelector('.videos')
    a = document.querySelector('#videos')
    progresso = localStorage.getItem('progresso')
    if (progresso === null || progresso === 0) {
        aula.style.backgroundColor = 'white'
    }
})