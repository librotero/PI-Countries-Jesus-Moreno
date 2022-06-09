const { Router } = require('express');
const { Country } = require('../db.js')
const router = Router();

router.get('/', (req, res, next) => {
    return Country.findAll()
        .then((Country) => {
            res.send(countries)
        })
})

router.get('/countries/:id', async(req, res, next) => {
    const countryIdToUp = req.params.idPais.toUpperCase();

    try {
      const countryFound = await Country.findOne({
        where: {
          id: countryIdToUp,
        },
        include: {
          model: Activities,
          attributes: ['name', 'difficulty', 'duration', 'season'],
          through: { attributes: [] },
        },
      });
  
      Object.values(countryFound) && res.status(200).send(countryFound);
    } catch (e) {
      return res.status(400).json({ message: e });
    }
})

router.put('/', (req, res, next) => {
    res.send('soy put / characters')
})

router.delete('/', (req, res, next) => {
    res.send('soy delete / characters')
})

module.exports = router;