
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';
async function f1 (lat, long, timeStr) {
    const querryString = APIAdress + `latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`
    const arr = await fetch(querryString).then(data => data.json())
    let sum = 0;
    arr.hourly.temperature_2m.forEach(element => {
        sum += element;
    });
    return Math.floor(sum/24);
}
f1(52.52, 13.41, "2024-10-04")
module.exports = f1;