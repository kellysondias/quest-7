const rightArrow = document.getElementById("seta-direita")

const images = document.getElementsByClassName('img')


rightArrow.addEventListener('click', () => {
    
    console.log(images)


    images.forEach(() => {
        images.classList.add('show') 
    });
})

/* let SetaDireita = document.getElementById("seta-direita")

SetaDireita.addEventListener('click', () => {

    let ImagemDeFundo = document.getElementsByTagName('body')
    
    ImagemDeFundo[0].style.backgroundImage = 'url(src/img/2.jpg)'
    
    let SetaEsquerda = document.getElementById("seta-esquerda")
    
    SetaEsquerda.innerHTML = `<img src="src/img/seta-esquerda.png" id="seta-esquerda" alt="Seta esquerda">`
    
    let Titulo = document.getElementsByTagName("h1")
    
    Titulo[0].innerHTML = `<h1>Titulo imagem 2</h1>`
    
    let Link = document.getElementById("link")
    
    Link.style.color = "#d9dd10"
}) */