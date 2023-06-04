let target="Agra";

async function fetchData(target){
    let url = `https://api.weatherapi.com/v1/current.json?key=aa1ba8d1f9c1481183d12453230306&q=${target}&aqi=no`
    let response = await fetch(url);
    let data = await response.json();
    let currTemp = data.current.temp_c;
    let currLocation = data.location.name;
    let currLocalTime = data.location.localtime;
    let currentCondition = data.current.condition.text;
    let currentConditionIcon = data.current.condition.icon;
    console.log(currTemp,currLocation,currLocalTime,currentCondition,currentConditionIcon);
}

fetchData(target);