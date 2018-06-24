const express = require('express');
const router = express.Router();
const client = require('stremio-addon-client');
const officialAddons = require('stremio-official-addons');
const aggregators = require('stremio-aggregators');
const _ = require('lodash');
let results = [];

module.exports = function(server, io, socket) {
    const col = new client.AddonCollection()

    
    // Load official add-ons
    col.load(officialAddons)
    
    // Create an aggregator to get all rows
    const aggr = new aggregators.Catalogs(col.addons)
    
    aggr.run()
    
    // Just returns the results on each call
        console.log('User connected');
        // We emit once so that there are results when the user connects.
        if (results.length > 0) {
            io.emit('rows', results);
        }

        aggr.evs.on('updated', () => {
            console.log('Rows were updated!');
            
            let newResults = [];
        
            aggr.results.forEach(function(result) {
                // each object in result.response.metas is an item that you have to display
                if (result.response && result.response.metas) {
                    newResults.push(result)
                }
            })
            
            if (newResults.length > 0) {
                results = newResults;
            }

            // Emits again each time the arguments are updated.
            const emitRows = _.debounce(() => {io.emit('rows', results)}, 100);
            emitRows();
        })
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
}