import axios from "axios";


const Api_key = import.meta.env.VITE_Strapi_apikey


const axios_client = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers :{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${Api_key}`
    }
})

function createResume(data){

   return  axios_client.post('user-resumes',{data :data});

}

function getResume(userEmail){

    return axios_client.get('user-resumes?filter[userEmail][$eq]='+userEmail)
}

export default {
    createResume,
    getResume
}