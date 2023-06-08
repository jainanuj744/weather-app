let temp = document.querySelector(".temperature");
let loc = document.querySelector(".location");
let ran_t = document.querySelector(".random_time");
let con_img = document.querySelector(".condition_img img");
let con = document.querySelector(".condition");
let search = document.querySelector(".input-field");
let form = document.querySelector("form");

let target = "Delhi";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    target = search.value;
    console.log(target);
    fetchData(target);
})

async function fetchData(target) {

    try {
        let url = `https://api.weatherapi.com/v1/current.json?key=aa1ba8d1f9c1481183d12453230306&q=${target}&aqi=no`
        let response = await fetch(url);
        let data = await response.json();
        let currTemp = data.current.temp_c;
        let currLocation = data.location.name;
        let currLocalTime = data.location.localtime;
        // console.log(currLocalTime);
        let currentCondition = data.current.condition.text;
        let currentConditionIcon = data.current.condition.icon;
        // console.log(currTemp, currLocation, currLocalTime, currentCondition, currentConditionIcon);
        updateDom(currTemp, currLocation, currLocalTime, currentCondition, currentConditionIcon);
    } catch (error) {
        alert("Please put a valid Location ")
        console.log(error);
    }
}

function updateDom(currTemp, currLocation, currLocalTime, currentCondition, currentConditionIcon) {
    let exactDate = currLocalTime.split(" ")[0];
    let exactTime = currLocalTime.split(" ")[1];
    // console.log(exactDate);
    // console.log(exactTime);
    let countOfDay = new Date(exactDate).getDay();
    console.log(countOfDay);
    let nameOfDay = getNameOfDay(countOfDay);
    console.log(nameOfDay);

    temp.innerHTML = currTemp;
    loc.innerHTML = currLocation;
    ran_t.innerHTML = `${exactTime} ${nameOfDay} ${exactDate}`
    con_img.src = currentConditionIcon;
    con.innerHTML = currentCondition;
}

let dayObject = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

function getNameOfDay(num) {
    return dayObject[num];
}

fetchData(target);