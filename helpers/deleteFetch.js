
import axios from "axios";
import { serverPath } from "./serverPath";

export const deleteFetch = async(id, token)=>{

    let config = {
    method: 'delete',
    url: serverPath + `api/productos/${id}`,
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