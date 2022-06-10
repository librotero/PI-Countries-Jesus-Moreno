const { Router } = require('express');
const { Country } = require('../db.js')
const router = Router();
const { getAllDb } = require('../util');

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
        const countriesDb = await getAllDb();

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