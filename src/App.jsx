import React, {useState} from "react";
import Loading from "./components/Loading";
import useFetch from './hooks/useFetch';
import getIPAddress from "./hooks/getIPAddress";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal'


/* This is the main component of a weather app built using React. It imports the `Loading` component
and two custom hooks `useFetch` and `getIPAddress`. It defines a function component `App` that uses
the `useFetch` hook to fetch weather data based on the user's location input or their IP address. It
also uses the `getIPAddress` hook to get the user's IP address. The component renders a search form,
a loading indicator, and weather data in a container. It also renders a modal with a YouTube video.
The `useState` hook is used to manage the state of the modal. */
function App() {


  const { data, location, isLoading, setLocation, fetchWeather } = useFetch();


/**
 * This function prevents the default behavior of a form submission, fetches weather data based on a
 * location input, and resets the location input field.
 */
  const searchLocation = (event) => {
    event.preventDefault();
    fetchWeather(location);
    setLocation("");
  };

/* This is a `useEffect` hook that runs only once when the component mounts. It calls the
`getIPAddress` function to get the user's IP address and then sets the location state to the user's
region based on the IP address. It then calls the `fetchWeather` function to fetch weather data for
the user's region. If there is an error, it logs the error to the console. */
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

/* These lines of code are using the `useState` hook to create a state variable `open` and a function
`setOpen` to update the state of `open`. The initial value of `open` is `true`. */
const [open, setOpen] = useState(true);
const onOpenModal = () => setOpen(true);
const onCloseModal = () => setOpen(false);





  return (
    /* This is the JSX code for the main component of a weather app built using React. It defines a
    function component `App` that renders a search form, a loading indicator, and weather data in a
    container. It also renders a modal with a YouTube video. The `useState` hook is used to manage
    the state of the modal. The component uses the `useFetch` hook to fetch weather data based on
    the user's location input or their IP address, and the `getIPAddress` hook to get the user's IP
    address. The code is enclosed in a `div` element with a class name of `app`. */
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
      </form>

      {isLoading && <Loading />} 
    

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
