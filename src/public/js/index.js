window.addEventListener('load', () => {
    const inputCity = document.querySelector('input.input-city');

    inputCity.addEventListener('change', async () => {
        const body = document.body
        const pLocationCity = document.querySelector('p.city');
        const pLocationCountry = document.querySelector('p.country');
        const pInfoWeather = document.querySelector('p.weather');
        const img = document.querySelector('img.img-weather');
        const pHumidity = document.querySelector('p.humidity-data');
        const pTemp = document.querySelector('p.temp-data');
        const pWind = document.querySelector('p.wind-mph-data');
        const footer = document.querySelector('footer.sub-info-weather');

        const temps = {
            heat: {
                between: {
                    min: 27,
                    max: Infinity
                }
            },
            cool: {
                between: {
                    min: 8,
                    max: 26
                }
            },
            cold: {
                between: {
                    min: -Infinity,
                    max: 10
                }
            }
        }

        const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=c4f2cbb0ab214c09afd40442230605&q=${inputCity.value.toUpperCase()}`)
            .then(response => response.json())

        for (const key in temps) {
            body.classList.remove(`${key}-background-color`);

            footer.classList.remove(`${key}-rounded-background`);

            if (result.current.temp_c >= temps[key].between.min && result.current.temp_c <= temps[key].between.max) {
                body.classList.add(`${key}-background-color`);

                footer.classList.add(`${key}-rounded-background`);
            }
        }

        pLocationCity.innerText = result.location.name;

        pLocationCountry.innerText = result.location.country;

        pInfoWeather.innerText = result.current.condition.text;

        img.src = result.current.condition.icon;

        pHumidity.innerText = `${result.current.humidity}%`;

        pTemp.innerText = `${result.current.temp_c}°`;

        pWind.innerText = `${result.current.wind_mph}`;
    })
})