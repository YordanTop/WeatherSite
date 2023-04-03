//6bf2f994f2b571c6a7b6b821490550fe
//data.weather[0].main
//data.weather[0].temp
const MakeJsonOutput = function(input,key){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${key}`)
     .then(response => response.json())
     .then(data => console.log(data.weather[0].main +" "+ data.main.temp))
}

let userInput = document.getElementById("");
let API_KEY = '6bf2f994f2b571c6a7b6b821490550fe';

MakeJsonOutput(userInput,API_KEY);