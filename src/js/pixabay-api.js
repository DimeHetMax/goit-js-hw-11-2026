import axios from "axios";
const KEY = "36536171-20dffb6feebbd7a17f40a2c96";
// &orientation=horizontal&safesearch=true
const API = axios.create({
  baseURL: `https://pixabay.com/api/`,
});

const getImagesByQuery = (query)=>{
    return API.get("",{
        params:{
            key: KEY,
            q: query,
            mage_type:"photo",
            page:13,
            orientation:"horizontal",
            safesearch:true,
            per_page:21,
        }
    })
}

export default getImagesByQuery