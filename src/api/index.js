import axios from 'axios';

 

export const getPlacesData = async (type, sw, ne) => {
    try{
        const { data: { data }}= await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'X-RapidAPI-Key': '3d0ca334f6msh1c1e5a438d4668dp1d95fdjsn8fa22b255222',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
            });

        return data;

    } catch (error) {
        console.log(error)

    }





}
export const getWeatherData = async (lat, lng) => {
    try{
      const { data } = await axios.get('https://open-weather-map27.p.rapidapi.com/weather', {
        params: { lon: lng, lat: lat, },
        headers: {
            'X-RapidAPI-Key': '3d0ca334f6msh1c1e5a438d4668dp1d95fdjsn8fa22b255222',
            'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com'
          }
      });



      return data;
    } catch (error) {
        console.log(error)

    }
}