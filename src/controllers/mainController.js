const fetch = require('node-fetch');

const controller = {
    index: async (req, res) => {
        const result = await fetch('https://api.weatherapi.com/v1/current.json?key=c4f2cbb0ab214c09afd40442230605&q=medellin')
            .then(response => response.json());

        let weatherClass;
        let weatherRoundedClass;

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

        weatherClass = 'rainy-background-color';
        weatherRoundedClass = 'rainy-rounded-background';

        if (!result.current.condition.text.includes('rain')) {
            for (const key in temps) {
                if (result.current.temp_c >= temps[key].between.min && result.current.temp_c <= temps[key].between.max) {
                    weatherClass = `${key}-background-color`;
                    weatherRoundedClass = `${key}-rounded-background`;
                }
            }
        }

        res.render('index', { result, weatherClass, weatherRoundedClass });
    }
};

module.exports = controller;