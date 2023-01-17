function Actualizar_hora() {
    var fecha= new Date(),
    horas = fecha.getHours(),
    ampm,
    minutos= fecha.getMinutes(),
    segundos = fecha.getSeconds(),
    dia=fecha.getDate(),
    mes=fecha.getMonth(),
    year=fecha.getFullYear();

    var pHoras= document.getElementById('horas'),
    pAMPM= document.getElementById('ampm'),
    pMinutos= document.getElementById('minutos'),
    pSegundos= document.getElementById('segundos'),
    pDia= document.getElementById('dia'),
    pMes= document.getElementById('mes'),
    pYear= document.getElementById('year');
    
    pDia.textContent= dia;
    var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    pMes.textContent= meses[mes];

    pYear.textContent   = year;

    pHoras.textContent  = horas;
    pAMPM.textContent   = ampm;
    if (minutos <10) {
        minutos="0" + minutos;
    }
    if (segundos <10) {
        segundos="0" + segundos;
    }
    pMinutos.textContent=minutos;
    pSegundos.textContent=segundos;

}

$(document).ready(function () {
    Actualizar_hora();
    setInterval(Actualizar_hora,1000);
});