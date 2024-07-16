/*
  * Archivo para manejar el 'CRUD' de la aplicación en relación a la API
*/

// Variable que almacena la url de la API
const enlaceAPI = "http://localhost:3001";

/*
  * Petición 'GET'
*/

async function getAPI(endPoint, almacenamientoDatos) {
  try { // Obtención y procesamiento de los datos
    const solicitud = await fetch(`${enlaceAPI}${endPoint}`);
    const datos = await solicitud.json(); 

    return almacenamientoDatos(datos);
  } catch (error) { // Tratamiento del erro
    console.log(error);
  }
}

/*
  * Petición 'POST'
*/

async function postAPI(endPoint, data) {
  try { // Envio de los datos
    await fetch(`${enlaceAPI}${endPoint}`,
      {
        method: "POST", // Método de envio
        /* Encabezado de la solicitud con el tipo de contenido a enviar */
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(data) // Cuerpo de la solicitud con los datos a enviar
      }
    )
  } catch (error) { // Tratamiento del error
    console.log(error);
  }
}

export const usaAPI = {
  getAPI, // Peticiones 'GET'
  postAPI // Peticiones 'POST'
};