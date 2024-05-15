document.addEventListener('DOMContentLoaded',function() {
    as = document.querySelectorAll('a')
    progresso = localStorage.getItem('progresso')
    if (progresso === null) {
        progresso = 0
        localStorage.setItem('progresso',progresso)
    }

    for (a of as) {
        a.addEventListener('click', function(event) {
            t = event.currentTarget
            progresso += 1
        })
    }
})