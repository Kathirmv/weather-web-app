//fetch('https://official-joke-api.appspot.com/jokes/programming/random').then((res)=>res.json()).then((msg)=>console.log(msg[0].setup,msg[0].punchline));
//fetch('http://api.openweathermap.org/data/2.5/weather?q=chennai&APPID=bbf0fd368e0e67193fedf4b8c42eb40c' ).then((res)=>res.json()).then((msg)=>console.log(msg.name));
getwhether=(city)=>{
    const api_key='bbf0fd368e0e67193fedf4b8c42eb40c';
    const url='http://api.openweathermap.org/data/2.5/weather';
    const full_url=`${url}?q=${city}&APPID=${api_key}&units=imperial`;
    console.log(full_url);
    const prom=fetch(full_url);
    console.log(prom);
    return  prom.then((req)=>req.json());
}
function  search(){
    const city= document.getElementById('cityname').value;
   
    getwhether(city).then((msg)=>show(msg)).catch((err)=>{
        console.log(err);
    });

};
show=(weather)=>{
    console.log(weather);
const Cityname= document.getElementById('Cityname').innerText=weather.name;
const temperature= document.getElementById('temp').innerText=weather.weather[0].main;
const mintemp= document.getElementById('mintemp').innerText=weather.main.temp_min;
const maxtemp= document.getElementById('maxtemp').innerText=weather.main.temp_max;
const img=document.querySelector('.climate_img');
if(temperature==="Clouds"){
    img.src="cloudy.png";
    
}
else if(temperature==="Haze"){
    img.src="mist.png";
}
else if(temperature==="Clear"){
    img.src="sun.png";
}
else if(temperature==="Drizzle"){
    img.src="cloudy.png";
}
}
