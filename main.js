const API_KEY = '70736d377c81381e4163a66e1950d6e7'
const d = document
const datoLS = JSON.parse(localStorage.getItem('climaRecibido'))

    if(datoLS != null){
        mostraDatos(datoLS)
    }

const btn = d.getElementById("buscarBtn")
btn.addEventListener('click', () => {
    let input = d.getElementById('buscar')
    obtenerDatosClima(input.value)
})

function obtenerDatosClima(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)

    .then(response => response.json())
    .then(data => {
        mostraDatos(data)
        guardarUltBusqueda(data)
        console.log(data)
    })
    
    .catch(err=>console.log(err))

}

function mostraDatos(data){
    let div_global = d.getElementById('divClima');

        let h2 = d.createElement('h2');
        let p = d.createElement('p');
        p.id = 'temperatura';
        let p2 = d.createElement('p');
        let p3 = d.createElement('p');
        let p4 = d.createElement('p');
        let p5 = d.createElement('p');
        let p6 = d.createElement('p');
        let p7 = d.createElement('p');

        div_global.appendChild(h2);
        div_global.appendChild(p);
        div_global.appendChild(p2);
        div_global.appendChild(p3);
        div_global.appendChild(p4);
        div_global.appendChild(p5);
        div_global.appendChild(p6);
        div_global.appendChild(p7);

        h2.innerHTML = ` ${data.name}`;
        h2.style.background = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}.png)`
        p.innerHTML = ` <span style="color: ${data.main.temp >= 20 ? 'red' : 'blue'} ";>${data.main.temp} ºC</span>`;
        p2.innerHTML = `Temperatura max: <span style="color: ${data.main.temp_max >= 20 ? 'red' : 'blue'} ";>${data.main.temp_max} ºC</span>`;
        p3.innerHTML = `Temperatura min: <span style="color: ${data.main.temp_min >= 20 ? 'red' : 'blue'} ";>${data.main.temp_min} ºC</span>`;
        p4.innerHTML = `Sensación termica:<span style="color: ${data.main.feels_like >= 20 ? 'red' : 'blue'} ";> ${data.main.feels_like} ºC `;
        p5.innerHTML = `Humedad: ${data.main.humidity} %`;
        p6.innerHTML = `Viento: ${data.wind.speed} Km/H`;
        p7.innerHTML = `Presión: ${data.main.pressure} Pa`;



}

function guardarUltBusqueda(data){
    localStorage.setItem( 'climaRecibido', JSON.stringify(data))
}



(function(d) {
    var config = {
      kitId: 'zsn7qcp',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

