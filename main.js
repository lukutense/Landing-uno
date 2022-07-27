const icono = document.querySelector('.icono')
const enlaces= document.querySelector('.enlaces')
const botonContacto= document.querySelector('#boton-contacto')
const formOculto= document.querySelector('.form-oculto')
const cerrarBoton = document.querySelector('.cerrar-boton')

const menuDesplegar = ()=>{
    icono.addEventListener('click', ()=>{
        enlaces.classList.toggle('dos')
    })
}

menuDesplegar()

const clickContacto = ()=>{
    botonContacto.addEventListener('click', ()=>{
        formOculto.classList.remove('form-oculto')
    })
}

clickContacto()

/* const clickCerrarForm = ()=>{
    cerrarBoton.addEventListener('click', (e)=>{
        e.preventDefault()
        formOculto.classList.add('form-oculto')
    })
}

clickCerrarForm() */