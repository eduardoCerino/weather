import React,{useState} from 'react'

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