
import axios from "axios";

export const deleteFetch = async(id, token)=>{

    let config = {
    method: 'delete',
    url: `https://server-modelo.herokuapp.com/api/productos/${id}`,
    headers: { 
        'Authorization': `${token}`
    }
    };

    await axios(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
});
}