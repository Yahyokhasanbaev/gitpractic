// let API='https://api.nasa.gov/planetary/apod?api_key=Chqhrv3vzxNkN19XQ1WKtDP260yracWccrUppJhb'
// fetch(API)
// .then(res=>res.json())
// .then(json=>{
//     console.log("json",json);
//     let h1=document.querySelector("h1")
    // let p=document.querySelector("p")
    // let img=document.querySelector("img")
    // let h2=document.querySelector("h2")
//     h1.innerHTML=json.date
//     p.innerHTML=json.explanation
//     img.src=json.url
//     h2.innerHTML=json.title
// })


let input=document.querySelector("#input")
let btn=document.querySelector(".btn")




let city_name="osh"
let weather=`https://api.openweathermap.org/data/2.5/weather?q=${city_name
}&units=matric&appid=6621546e1a94625a215c063e4320d66d`

fetch(weather)
.then(res =>res.json())
.then(json=>{
    console.log("weather",json);
    let input=document.querySelector("input")
    let btn=document.querySelector(".btn")
    let names=document.querySelector(".name")
    let weather=document.querySelector(".weather")
    let temp=document.querySelector(".temp")
    let speed=document.querySelector(".speed")

    btn.onclck=()=>{
        // input.value =city_name
        // names.innerHTML=json.name
        // weather.innerHTML.json.weather
        // temp.innerHTML.json.temp
        // speed.innerHTML.json.speed

    }

})
