let apiKey = "a6c038be976096e9b879c761d069e0db";

async function getWeather(){
    let city = document.querySelector(".cityName").value.trim();
    let display = document.querySelector(".displaySection");
    let errorMess = document.querySelector(".error");

    if(!city){
        errorMess.textContent="Enter a city Name";
        display.classList.add("hidden");
        errorMess.classList.remove("hidden");
        return;
    }

    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        errorMess.textContent = "";

        let response = await fetch(url);
        if(!response.ok){
            display.classList.add("hidden");
            throw new Error("Enter a valid name");
        }

        let data = await response.json();

        document.querySelector(".city").textContent=data.name;
        document.querySelector(".temp").textContent=`🌡️ Temp: ${data.main.temp} °C`;
        document.querySelector(".discription").textContent=`☁️ ${data.weather[0].description}`;

        errorMess.classList.add("hidden");
        display.classList.remove("hidden");
        
    }
    catch(err){
        display.classList.add("hidden");
        errorMess.textContent=`Error: ${err.message}`;
        errorMess.classList.remove("hidden");
    }

}

document.querySelector(".GetButton").addEventListener("click",getWeather);
window.addEventListener("keydown",(event)=>{
    if(event.key==="Enter") getWeather();
});

let mode = document.querySelector(".mode");
mode.addEventListener("click",()=>{


    if(mode.textContent=="🌙 Dark"){
        document.body.classList.add("dark");
        mode.textContent="🌞 Light"
    }
    else{
        document.body.classList.remove("dark");
        mode.textContent="🌙 Dark"
    }

    if(document.body.classList.contains("dark")){
        document.querySelector(".container").style.backgroundColor="wheat";
        document.querySelector("h1").style.color="#8B4513";
    }
    else{
        document.querySelector(".container").style.backgroundColor="";
        document.querySelector("h1").style.color="";
    }
    
})