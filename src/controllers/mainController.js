const fetch = require('node-fetch');

const controller = {
    index: async (req, res) => {
        const result = await fetch('https://api.weatherapi.com/v1/current.json?key=c4f2cbb0ab214c09afd40442230605&q=5.696108,-76.658462')
            .then(response => response.json());

        res.render('index', { result })
    }
};

module.exports = controller;