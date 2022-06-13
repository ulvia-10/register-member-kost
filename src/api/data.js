import axios from "axios";
   const memberAxios = axios.create({ baseURL: "http://localhost:8000/"});
  export{
      memberAxios, 
  }