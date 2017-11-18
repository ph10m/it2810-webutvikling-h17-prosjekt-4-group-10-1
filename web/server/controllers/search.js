var express = require('express'),
    router = express.Router(),
    path = require('path'),
    crimestat = require(path.normalize('../models/search'));

router.post('/search', function(req, res) {
    crimestat.search(req.body.name, req.body.sort, req.body.sortAscDesc, function(crimes) {
        res.json({
            crimes
        })
    })
});

module.exports = router;