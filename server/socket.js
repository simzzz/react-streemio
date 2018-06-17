const express = require('express');
const router = express.Router();
const client = require('stremio-addon-client');
const officialAddons = require('stremio-official-addons');
const aggregators = require('stremio-aggregators');

module.exports = function(server) {
    const col = new client.AddonCollection()
    const io = require('socket.io')(server);

    let results = [];
    
    // Load official add-ons
    col.load(officialAddons)
    
    // Create an aggregator to get all rows
    const aggr = new aggregators.Catalogs(col.addons)
    
    aggr.run()
    
    // Just returns the results on each call
    io.on('connection', socket => {
        console.log('User connected');

        // We emit once so that there are results when the user connects.
        io.emit('rows', results);        

        aggr.evs.on('updated', () => {
            console.log('Rows were updated!');
            results = [];
            aggr.results.forEach(function(result) {
                // each object in result.response.metas is an item that you have to display
                if (result.response && result.response.metas) {
                    results.push(result)
                }
            })
            
            // Emits again each time the arguments are updated.
            io.emit('rows', results);
        })
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    })

}