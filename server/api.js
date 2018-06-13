const express = require('express');
const router = express.Router();
const client = require('stremio-addon-client')
const officialAddons = require('stremio-official-addons')
const aggregators = require('stremio-aggregators')

const col = new client.AddonCollection()

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Get users
router.get('/addons', (req, res) => {
    // Load official add-ons
    col.load(officialAddons)

    // Create an aggregator to get all rows
    const aggr = new aggregators.Catalogs(col.addons)

    aggr.run()

    // Just returns the results on each call
    // TODO: Emit them so the front-end auto updates each time
    // TODO: Do it in a way without hardcoding a header
    // which presents a security vulnerability
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(aggr.results).status(200);
});

module.exports = router;