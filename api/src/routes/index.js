const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Country, Activity, Op } = require('../db.js')
const { getAllDb, getAllApi } = require('../util');

const router = Router();


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


router.get('/countries/:id', async(req, res, next) => {
    const { id } = req.params;
    try {
        const countryFound = await Country.findOne({
            where: {
                id: id.toUpperCase(),
            },
            include: {
                model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season'],
                through: { attributes: [] },
            },
        });

        if (!countryFound) {
            return res.status(200).send();
        } else {
            return res.status(200).send(countryFound);
        }
    } catch (e) {
        return res.status(400).send(e);
    }
})

router.get('/countries', async(req, res, next) => {
    const { name } = req.query;

    try {
        //const countriesDb = await getAllApi();

        if (!name) {
            return res.status(200).send(countriesDb);
        } else {
            const nameToSearch = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    },
                },
                include: {
                    model: Activity,
                    attributes: ['name', 'difficulty', 'duration', 'season'],
                    through: { attributes: [] },
                },
            });
            if (nameToSearch === 0) {
                return res.status(200).send();
            } else {
                return res.status(200).send(nameToSearch);
            }
        }
    } catch (e) {
        return res.status(400).send(e);
    }
})
module.exports = router;