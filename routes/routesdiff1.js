const express = require("express");
const router = express.Router()


router.get('/api/getUser',(req,res) => {
    res.send('GET /api/getUser')
});

router.post('/api/user', (req,res)=> {
    res.send('GET /api/user')
});