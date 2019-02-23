const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/myalbums', (req, res, next)=>{
    res.render('MyAlbums');
});

module.exports = router;