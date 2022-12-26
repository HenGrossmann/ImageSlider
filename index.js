const imagemCon = document.querySelector('.image-container')
const next = document.querySelector('.btn.next')
const prev = document.querySelector('.btn.prev')
let Pos = 0
let timeout 

ligar()

function ligar(){
    timeout = setInterval(()=>{
        proximo()
    },3000)
}



function proximo(){
    if(Pos==-2000){
        Pos = 500
    }
    Pos -= 500
    imagemCon.style.transform = `translate(${Pos}px)`
    console.log(Pos)
        
    clearInterval(timeout)
    ligar()
}






function voltar(){
    if(Pos==0){
        Pos = -2500
    }
    Pos += 500
        imagemCon.style.transform = `translate(${Pos}px)`
        console.log(Pos)
    
    
    clearInterval(timeout)
    ligar()
    }



