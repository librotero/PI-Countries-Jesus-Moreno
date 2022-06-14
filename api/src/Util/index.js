const axios = require('axios');
const { Country, Activity } = require('../db');


const getAllApi = async() => {
    try {
        const info = await axios.get('https://restcountries.com/v3/all')
        const infoFromApi = await info.data.map(async(d) => {
            const country = {
                name: d.name.official,
                id: d.cca3,
                flag: d.flags[0],
                continent: d.region,
                capital: d.capital && d.capital[0],
                subregion: d.subregion,
                area: d.area,
                population: d.population,
            };

            Country.findOrCreate({
                where: { id: d.cca3 },
                defaults: country,
            });
            //console.log(country)
            return country;
        });

        return infoFromApi;
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};


const getAllDb = async() => {
    try {

        const countriesDb = await Country.findAll({
            attributes: ['name', 'id', 'flag', 'continent', 'capital', 'subregion', 'area', 'population'],
            through: {
                attributes: [],
            },
            include: {
                model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season'],
                through: { attributes: [] },
            },
        })
        res.send(countriesDb);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
};

module.exports = {
    getAllApi,
    getAllDb,
};