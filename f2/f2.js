const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';

const f2 = async (lat, long, timeStr, hour) => {
    const querryString = APIAdress + `latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`
    const arr = await fetch(querryString).then(data => data.json())
    return arr.hourly.temperature_2m.at(hour)

}
module.exports = f2;