const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
    res.send('soy Get / activities')
})

router.post('/', (req, res, next) => {
    res.send('soy post / activities')
})

router.put('/', (req, res, next) => {
    res.send('soy put / activities')
})

router.delete('/', (req, res, next) => {
    res.send('soy delete / activities')
})

module.exports = router;