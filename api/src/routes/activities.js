const { Router } = require('express');
const router = Router();
const { Activity } = require('../db');

router.get('/activities', async(req, res, next) => {
    try {
        const activity = await Activity.findAll();
        res.status(200).send(activity);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.post('/activities', async(req, res, next) => {
    const {
        name,
        difficulty,
        duration,
        season,
    } = req.body;
    try {
        const activity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });
        res.status(201).send(activity);
    } catch (e) {
        res.status(400).send(e);
    }
})


module.exports = router;