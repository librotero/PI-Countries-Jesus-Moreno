const { Router } = require("express");
const { Country, Activity, Op } = require("../db");
const axios = require("axios");
const { Sequelize } = require("sequelize");

const counrtyRouter = Router();

//AGREGA A LA BD LA DATA DE API
const getDataApi = async () => {
  try {
    const dataUrl = await axios.get(`https://restcountries.com/v3/all`);
    const dataApi = dataUrl.data.map((el) => {
      return {
        id: el.cca3,
        name: el.name.common,
        flags: el.flags[0],
        continents: el.continents[0],
        capital: el.capital ? el.capital[0] : "Sin Capital",
        subregion: el.subregion,
        area: el.area,
        population: el.population,
      };
    });
    return dataApi;
  } catch (error) {
    console.log("No nos llego info desde la Api", error);
  }
};

//BUSCAR EN BD NOMBRE O TODA LA DB(si hay o no bd creada)
counrtyRouter.get("/", async (req, res) => {
    const {name} = req.query
    const paisesBd = await Country.findAll()

    try {

        if(!paisesBd.length) {

            let infoCountries = await getDataApi()
            await Country.bulkCreate(infoCountries)
            const paisesBd = await Country.findAll()

            if (name) {
              console.log('este es el name', name);
              const byName = paisesBd.filter((n) =>
                n.name.toLowerCase().includes(name.toLowerCase())
              );
              byName.length
                ? res.status(200).send(byName)
                : res.status(404).json({ error: 'no se encontro ningun pais' });
            } else {
              res.status(200).send(paisesBd);
            }
            

        } else {
          if (name) {
            console.log('este es el name', name);
            const byName = paisesBd.filter((n) =>
              n.name.toLowerCase().includes(name.toLowerCase())
            );
            byName.length
              ? res.status(200).send(byName)
              : res.status(404).json({ error: 'no se encontro ningun pais' });
          } else {
            res.status(200).send(paisesBd);
          }

        }

    } catch (error) {
        console.log(error)
    }
});

//BUSCAR POR ID
counrtyRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dataDb = await Country.findByPk(id.toUpperCase(), {
      include: {
        model: Activity,
      },
    });
    res.json(dataDb);
  } catch (error) {
    console.log(error);
  }
});

module.exports ={counrtyRouter, getDataApi};
