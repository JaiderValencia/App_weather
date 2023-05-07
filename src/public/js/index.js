window.addEventListener('load', () => {
    const inputCity = document.querySelector('input.input-city');

    inputCity.addEventListener('change', async () => {
        const pLocationCity = document.querySelector('p.city');
        const pLocationCountry = document.querySelector('p.country');
        const pInfoWeather = document.querySelector('p.weather');
        const img = document.querySelector('img.img-weather');
        const pHumidity = document.querySelector('p.humidity-data');
        const pTemp = document.querySelector('p.temp-data');
        const pWind = document.querySelector('p.wind-mph-data');

        const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=c4f2cbb0ab214c09afd40442230605&q=${inputCity.value}`)
            .then(response => response.json());

        pLocationCity.innerText = result.location.name;

        pLocationCountry.innerText = result.location.country;

        pInfoWeather.innerText = result.current.condition.text;

        img.src = result.current.condition.icon;

        pHumidity.innerText = `${result.current.humidity}%`;

        pTemp.innerText = `${result.current.temp_c}°`;

        pWind.innerText = `${result.current.wind_mph}`;
    })
})