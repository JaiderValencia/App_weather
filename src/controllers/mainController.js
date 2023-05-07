import fetch from 'node-fetch'

const controller = {
    index: async (req, res) => {
        res.render('index.ejs');
    }
};

module.exports = controller;