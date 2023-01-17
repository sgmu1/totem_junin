const mySelect1 = document.querySelector('#select1');
const mySelect2 = document.querySelector('#select2');
const mySelect3 = document.querySelector('#select3');

//Evento mostrar Recorrido seleccionado
mySelect1.addEventListener('change', (event) => {
    const resultado = document.querySelector('#row5');  

    resultado.innerHTML = `<img class='w3-animate-bottom' src="./img/lineas/${event.target.value}.png" alt="" srcset="">`
})
mySelect2.addEventListener('change', (event) => {
    const resultado = document.querySelector('#row5');
    
    resultado.innerHTML = `<img class='w3-animate-bottom' src="./img/lineas/${event.target.value}.png" alt="" srcset="">`
})
mySelect3.addEventListener('change', (event) => {
    const resultado = document.querySelector('#row5');

    console.log(resultado)
    resultado.innerHTML = `<img class='w3-animate-bottom' src="./img/lineas/${event.target.value}.png" alt="" srcset="">`
})

//Styles btn
mySelect1.addEventListener('focus', (event)=>{ myStyle_in (event) });
mySelect1.addEventListener('blur' , (event)=>{ myStyle_out(event) });

mySelect2.addEventListener('focus', (event)=>{ myStyle_in (event) });
mySelect2.addEventListener('blur' , (event)=>{ myStyle_out(event) });

mySelect3.addEventListener('focus', (event)=>{ myStyle_in (event) });
mySelect3.addEventListener('blur' , (event)=>{ myStyle_out(event) });

function myStyle_in(event) {
    const ev = event.target.style;
    ev.backgroundColor = 'white';
    ev.boxShadow       = '0 0 15px #000';
}
function myStyle_out(event) {
    const ev = event.target.style;
    ev.backgroundColor = '#fbfbfb';
    ev.boxShadow       = 'inset 0px 0px 10px rgba(0, 0, 0, 0.5)';
}