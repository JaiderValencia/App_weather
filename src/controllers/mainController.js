const fetch = require('node-fetch');

const controller = {
    index: async (req, res) => {
        res.render('index.ejs');
    }
};

module.exports = controller;