import axios from "axios";
const api=axios.create({
    baseURL:"https://restcountries.com/v3.1",
});
//HTTP GET METHOD
export const getCountryData=()=>{
    return api.get("/all?fields=name,population,region,capital,flags")
};
//https://app-you-want.com/api/dataYouWant?apiKey=1234&lang=DE
// BaseUrl/EndPoint/Indicates Start of query/Query1/Query2
export const getSingleCountryData=(name)=>{
    return api.get(    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
};