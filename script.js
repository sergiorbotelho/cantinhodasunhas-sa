const c = (el) => document.querySelector(el);

c('#horario').addEventListener('click', (e) => {
    // e.preventDefault()
    c('.modal-area').style.display = 'flex'
    c('.modal-area .modal').style.display = 'flex'
    c('#backgroundImage').setAttribute('src', './assets/images/horario.jpeg')
    
})

c('#service').addEventListener('click', (e) => {
    // e.preventDefault()
    c('.modal-area').style.display = 'flex'
    c('.modal-area .modal').style.display = 'flex'
    c('#backgroundImage').setAttribute('src', './assets/images/servicos.jpeg')
    console.log("TESTE");
})

c('.backdrop').addEventListener('click', () => {

    c('.modal-area').style.display = 'none'
    c('.modal-area .modal').style.display = 'none'
    c('#backgroundImage').removeAttribute('src')
})


function loadBackground(){

}