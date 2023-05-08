import React,{useState} from 'react'

/**
 * This is a custom hook in JavaScript that fetches weather data from the OpenWeatherMap API and
 * returns the data, location, isLoading state, and a function to set the location and fetch the
 * weather.
 * @returns An object with four properties: `data`, `location`, `isLoading`, and `fetchWeather`. The
 * `data` property is initialized as an empty object and will be updated with weather data fetched from
 * the OpenWeatherMap API. The `location` property is initialized as an empty string and will be
 * updated with the user's input for the location they want to fetch weather data for. The `isLoading
 */
const useFetch = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchWeather = async (location) => {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=74d2907233a37ce65bc3adcae718c804`;
      

       try{
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
    }
    catch(err){
        console.error('Error al obtener el clima:', err);
        setIsLoading(false);
       }
      }

  return {
    data,
    location,
    isLoading,
    setLocation,
    fetchWeather

  }
}

export default useFetch