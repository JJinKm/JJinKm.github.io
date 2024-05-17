document.addEventListener('DOMContentLoaded',function() {
    buttons = document.querySelectorAll('.button')
    filename = location.href.split("/").slice(-1)
    bar = document.querySelector('.progress')
    progresso = localStorage.getItem('progresso'+filename)
    if (progresso === null) {
        progresso = 0
    }
    bar.style.width = progresso + '%'
    bar.innerHTML = progresso+'%'
    
    for (button of buttons) {
        button.addEventListener('click', function(event) {
            t = event.currentTarget
            if (progresso < 100) {
                progresso += 1
                localStorage.setItem('progresso'+filename,progresso)
                bar.style.width = progresso + '%'
                bar.innerHTML = progresso + '%'
            }
            event.preventDefault()
        })
    }
})