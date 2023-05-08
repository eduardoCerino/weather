/**
 * This function retrieves the user's IP address using the ipapi.co API and returns it as a JSON
 * object.
 * @returns The function `getIPAddress()` returns a Promise that resolves to an object containing
 * information about the user's IP address, obtained from the API at "https://ipapi.co/json/". If there
 * is an error in fetching or parsing the data, the function will catch the error and log it to the
 * console.
 */
async function getIPAddress() {

    try{
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        return data;
    }
    catch(err){
        console.error('Error al obtener la dirección IP:', err);
    }
   }

export default getIPAddress;
