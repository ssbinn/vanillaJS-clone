// #10 화면에 날씨가져오기
// weather API - https://openweathermap.org/api - API는 서버에게 요청하는 거잖아

const API_KEY = "";

function onGeoSucces(position) { // succes함수 - GeolocationPosition object 하나를 입력 파라미터로 받음 -JS가 제공한다는 얘기
    // console.log(position);

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(lat, lon);

    // JS가 URL 부르도록 만들기 
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // 화씨를 섭씨온도로 변환

    // call URL - fetch는 promise임, 당장 일어나는게 아니고 서버의 응답을 기다림
    //then 사용해서 response를 받아야 하고, 내용(data)을 추출했다면 JS가 보여주도록 공간을 만들어 주어야 함
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); 
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// geolocation.getCurrentPosition - Web API
navigator.geolocation.getCurrentPosition(onGeoSucces, onGeoError);

