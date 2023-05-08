import React, {useState} from "react";
import Loading from "./components/Loading";
import useFetch from './hooks/useFetch';
import getIPAddress from "./hooks/getIPAddress";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal'


function App() {


  const { data, location, isLoading, setLocation, fetchWeather } = useFetch();


  const searchLocation = (event) => {
    event.preventDefault();
    fetchWeather(location);
    setLocation("");
  };

React.useEffect(() => {

  try {
    const getIP = async () => {
      const ip = await getIPAddress();
      setLocation(ip.region);
      console.log(ip.region);
      fetchWeather(ip.region); 
    };
    getIP();
  } catch (error) {
    console.log(error);
  }
}, []);

const [open, setOpen] = useState(true);

const onOpenModal = () => setOpen(true);
const onCloseModal = () => setOpen(false);





  return (
    <div className="app">

      <Modal open={open} onClose={onCloseModal} center>
        <p>Weather Live right now!</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/iesPl7zRbVY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Modal>

      <form className="search" onSubmit={searchLocation}>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
        />
        <button type="submit" className="btn">
          Buscar
        </button>
        {/* <button className='btn btn_secondary'>Borrar</button> */}
      </form>

      {isLoading && <Loading />} {/* Mostrar indicador de carga mientras isLoading sea verdadero */}

      <div className="container">
        <div className="container__top">
          <div className="container__location">
            <p>{data.name}</p>
          </div>
          <div className="container__temp">
            {data.main ? <h1>{data.main.temp}°C </h1> : null}
          </div>
          <div className="container__description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined && (
          <div className="container__bottom">
            <div className="container__feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like}°C</p>
              ) : null}
              <p className="feels">
                {" "}
                Feels <br /> like
              </p>
            </div>
            <div className="container__humidity">
              {data.main ? (
                <p className="bold">{data.main.humidity}%</p>
              ) : null}
              <p> Humidity</p>
            </div>
            <div className="container__wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed} MPH</p>
              ) : null}
              <p> Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
