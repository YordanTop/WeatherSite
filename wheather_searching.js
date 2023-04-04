let userInput = document.getElementById("user-input");
let region = document.getElementById("region");
let API_KEY = 'API_KEY';
let count = 0
let popularePlaces = ["Usa","Germany","France","Hong Kong"
                      ,"Paris","Turkey","Iraq","Sofia"]

const WeatherRequest = async function(input="bulgaria",key,func){
    console.log(input)
         let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${key}`)
         .then(response => response.json())
         .then(data => func(data))
    }

const DefaultSetting = function(data){
    console.log(data)
    {

        let API_Elements = {
            property:["current","wind","temp-rise","temp-low"],
            temp_element:[data.main.temp
                    ,data.wind.speed
                    ,data.main.temp_max
                    ,data.main.temp_min
                    ],
            img:"current-img",
            data:data
        }

        for(let i=0;i<API_Elements.temp_element.length;i++){
            ChangeBlock(API_Elements.data,API_Elements.temp_element[i],API_Elements.property[i],API_Elements.img);
        }
        
    }
}
const CreateChunkWeather = function(data){
    let regionLayer = document.getElementById("create-chunk");

    regionLayer.innerHTML += `
    <div class="box-layer">
      <aside class="temp-stats">
        <h2>Temperature</h2>

        <p>${data.main.temp}&deg;</p>
        
      </aside>

    <img id="icon-img-${count}" src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms.svg" alt="wheather">
    <p>${data.name}:</p>
</div>`

addImg(data,`icon-img-${count}`);

count++;
}

const ChangeBlock = function(data,temp,text,img){
      addTemp(temp,text);
      addImg(data,img);
}

const addImg = function(data,img){
    let add = document.getElementById(img);

    let weather = {
    condition: [["https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg","Clear"],
    ["https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-night.svg","Clear"],
    ["https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg","Clouds"],
    ["https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg","Rain"],
    ["https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms.svg","Thunderstorm"],
    ["https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg","Snow"],
    ["https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg","mist"]]
}

   for(let i = 0; i<weather.condition.length;i++){

    if(data.weather[0].main == "Clear"){

        if(data.weather[0].icon === '01d'){
            console.log(2)
            add.src = weather.condition[0][0];
            break;
           }
        
        if(data.weather[0].icon === '01n'){
            console.log(1)
            add.src = weather.condition[1][0];
            break;
           }
     }else
        if(weather.condition[i][1] === data.weather[0].main){
            
            add.src = weather.condition[i][0];
            break;
        }

    }
   

}
const addTemp = function(data,text){
    let add = document.getElementById(text);

    if(text === "wind")
    add.innerHTML=`<p>${data}&#8744;</p>`;
    else
    add.innerHTML=`<p>${data}&deg;</p>`;
}

userInput.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        
        let info = userInput.value.toString();
        region.innerHTML=`Currently in ${info}`;
        WeatherRequest(info,API_KEY,DefaultSetting);

        
    }
})

WeatherRequest(undefined,API_KEY,DefaultSetting);

for(let i=0;i<=popularePlaces.length-1;i++){
   WeatherRequest(popularePlaces[i],API_KEY,CreateChunkWeather);
}

