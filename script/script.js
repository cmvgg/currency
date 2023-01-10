const moneda1 = document.getElementById('starting');
const moneda2 = document.getElementById('valor2');
const cambio = document.getElementById('enter');
const cambio2 = document.getElementById('exit');
const bot = document.getElementById('cambio');
const tas = document.getElementById('tasa');



function calculate(){
  const mon1 = moneda1.value;
  const mon2 = moneda2.value;

    fetch(`https://open.er-api.com/v6/latest/${mon1}`,)
    .then(res => res.json())
    .then(data => {
        const tasa = data.rates[mon2];

        bot.innerText = `1 ${mon1} = ${tasa} ${mon2}`;
    
        cambio2.value = (cambio.value * tasa).toFixed(2);

    } );

}

moneda1.addEventListener('change', calculate);
cambio.addEventListener('input', calculate);
moneda2.addEventListener('change', calculate);
cambio2.addEventListener('input', calculate);

tasa.addEventListener('click', ()=>{
  const temp = mon1.value;
  mon1.value = mon2.value;
  mon2.value = temp;
  calculate();
} );

calculate();







starting.addEventListener("change",()=>{
  currenci.setAttribute("src","img/" + starting.selectedOptions[0].value + ".png")
})
valor2.addEventListener("change",()=>{
  imgchange.setAttribute("src","img/" + valor2.selectedOptions[0].value + ".png")
})