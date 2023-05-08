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
