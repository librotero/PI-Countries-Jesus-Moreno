const axios = require('axios');
const { Country, Activity } = require('../db');

const getAllApi = async() => {
    try {
        const { info } = await axios.get('https://restcountries.eu/rest/v3/all');
        const infoFromApi = await info.map(async(d) => {
            const country = {
                name: d.name.common,
                id: d.alpha3Code,
                continent: d.region,
                flag: d.flag,
                capital: d.capital,
                subregion: d.subregion,
                area: d.area,
            };
            Country.findOrCreate({
                where: { id: d.alpha3Code },
                defaults: country,
            });
            return country;
        });
        return infoFromApi;
    } catch (e) {
        console.log(e);
    }
};
const getAllDb = async() => {
    const countriesDb = await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: { attributes: [] },
        },
    })
    return countriesDb;
};

module.exports = {
    getAllApi,
    getAllDb,
};