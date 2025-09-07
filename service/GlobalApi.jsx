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

   return  axios_client.post('user-resumes',{data});

}

function getResume(userEmail){

    return axios_client.get('user-resumes?filters[userEmail][$eq]='+userEmail)
}

function updateResume(data,docid){
    return axios_client.put(`user-resumes/${docid}`,{data:data})
}

function getResumebyid(docid){
    return axios_client.get('user-resumes/' + docid +'?populate=*')
}

export default {
    createResume,
    getResume,
    updateResume,
    getResumebyid

}