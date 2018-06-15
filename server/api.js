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

let results = [];

// Load official add-ons
col.load(officialAddons)

// Create an aggregator to get all rows
const aggr = new aggregators.Catalogs(col.addons)

aggr.run()

// Just returns the results on each call

aggr.evs.on('updated', () => {
    results = [];
    aggr.results.forEach(function(result) {
        // each object in result.response.metas is an item that you have to display
        if (result.response && result.response.metas) {
            results.push(result)
        }
    })
})

// Get users
router.get('/addons', (req, res) => {
    // TODO: Do it in a way without hardcoding a header which presents a security vulnerability    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(results).status(200);
});

module.exports = router;