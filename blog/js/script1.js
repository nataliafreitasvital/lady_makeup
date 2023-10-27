//cria os cards
document.addEventListener('DOMContentLoaded', () => {
    const postArray = [
        {
            titulo: "A melhor base ",
            conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  s sfvsfvefvde regetgrtbsrtbr tgrtbrbr retgrthbrtbh ertgthgtbhyhb tgt5rebrtnbb htybhsdbgrty5 thentyng',
            img: 'img/base.jpg'
        },
        {
            titulo: "Batom Vermelho ",
            conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  s sfvsfvefvde regetgrtbsrtbr tgrtbrbr retgrthbrtbh ertgthgtbhyhb tgt5rebrtnbb htybhsdbgrty5 thentyng',
            img: 'img/batom-vermelho.jpg'
        },
        {
            titulo: "Rímeo",
            conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  s sfvsfvefvde regetgrtbsrtbr tgrtbrbr retgrthbrtbh ertgthgtbhyhb tgt5rebrtnbb htybhsdbgrty5 thentyng',
            img: 'img/rimeo.jpg'
        }
    ]

    const carretel = document.querySelector('.carretel-cards')
    const blog = document.querySelector('blog-escolhido')

    function criarCarretel() {
        for (let i = 0; i < postArray.length; i++) {
          const card = document.createElement('div')
          const imgcard = document.createElement('div')
          const img = document.createElement('img')
          img.setAttribute('src', postArray[i].img)
          card.className = 'cards'
          imgcard.className = 'img-cards'
          card.setAttribute('data-id', i)
          card.addEventListener('click', blogEscolhido)
          imgcard.appendChild(img)
          card.appendChild(imgcard)
          carretel.appendChild(card)
        }
      }
      function blogEscolhido(){
        let cardId = this.getAttribute('data-id')
        const imgcard = document.createElement('div')
        const img = document.createElement('img')
        const textcard = document.createElement('div')
        const titulo = document.createElement('h1')
        const conteudo = document.createElement('p')
        img.setAttribute('src', postArray[cardId].img)
        titulo.innerHTML = postArray[cardId].titulo
        conteudo.innerHTML = postArray[cardId].conteudo
        imgcard.appendChild(img)
        textcard.appendChild(titulo, conteudo)
        blog.appendChild(imgcard, textcard)
      } 
    

 criarCarretel()
})