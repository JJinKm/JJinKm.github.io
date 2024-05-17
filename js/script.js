document.addEventListener('DOMContentLoaded', function() {
    bar = document.querySelector('.progress')
    progresso = localStorage.getItem('progresso')
    if (progresso === null || progresso === 0) {
        progresso = 0
        bar.style.width = progresso + '%'
        bar.innerHTML = progresso + '%'
    }
})