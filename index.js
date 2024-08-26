const  arrowLeft = document.querySelector("#left")
const  arrowRight = document.querySelector("#right")

console.log(typeof(arrowLeft))


const toLeft = (e)=>{
    console.log("click para la izquierda")
}


const toRight = (e)=>{
    console.log("click para la derecha")
}

arrowLeft.addEventListener("click", toLeft)
arrowRight.addEventListener("click", toRight)
