import axios from "axios";
const KEY = "36536171-20dffb6feebbd7a17f40a2c96";

const API = axios.create({
  baseURL: `https://pixabay.com/api/`,
});

const getImagesByQuery = (query)=>{
    return API.get("",{
        params:{
            key: KEY,
            q: query,
            image_type:"photo",
            page:1,
            orientation:"horizontal",
            safesearch:true,
            per_page:21,
        }
    }).then(response => {
    return response.data;
  });

}

export default getImagesByQuery