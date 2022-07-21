const icono = document.querySelector('.icono')
const enlaces= document.querySelector('.enlaces')

const menuDesplegar = ()=>{
    icono.addEventListener('click', ()=>{
        enlaces.classList.toggle('dos')
    })
}

menuDesplegar()