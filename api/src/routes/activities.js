const { Router } = require('express');
const { Country, Activity} = require('../db')
const axios = require('axios');


const activityRouter = Router();

activityRouter.get("/", async (req, res) => {
    try {
        let getAllActivities = await Activity.findAll({
            include: Country
        });
        return res.status(200).json(getAllActivities);
    } catch (error) {
        return next(error);
    }
})

activityRouter.post("/", async (req, res) => {

    try {

        let {name, dificultad, duracion, temporada, countries} = req.body

        const createActividad = await Activity.create({
            name,
            dificultad,
            duracion,
            temporada
        });
        const newcountry = await Country.findAll({
            where: {
                id: countries  
            }
        })
        await createActividad.addCountry(newcountry)
        return res.status(201).json(createActividad);
    }
    catch (error) {
        return res.status(500).json(error);
    }
})

module.exports = activityRouter;