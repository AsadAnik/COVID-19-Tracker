import axios from 'axios';
///The API URL..
const apiURL = 'https://covid19.mathdro.id/api';

//Api for Loading
export const send_API_ToLoading = apiURL;

///Cards_Data Fetchs...
export const fetchData = async(country) => {
   //To selectOption Changer with country... 
    let dynamicURL = apiURL;

    if(country){
        dynamicURL = `${apiURL}/countries/${country}`;
        console.log('selector : ', dynamicURL) 
    }
  //Defeault Data from API fetching...  
    try{
         const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(dynamicURL);
         return {confirmed, recovered, deaths, lastUpdate};

    }catch(error){
        console.log(`Data Fetching Problem ${error}`)
        return `Error : ${error}`;
    }
}

//Fetch API for Charts_Data...
export const chartDataFetch = async() => {
    try{
        const { data } = await axios.get(`${apiURL}/daily`);
        
        let traversedData = data.map((listData) => ({
            confirmed: listData.confirmed.total,
            deaths: listData.deaths.total,
            date: listData.reportDate
        }));

        return traversedData;

    }catch(error){
        console.log(`ChartData Error ${error}`)
        return `Error in daily data : ${error}`;
    }
}

//Fetch API for SelectOptions...
export const fetchDataOption = async() => {
    try{
        const {data: {countries}} = await axios.get(`${apiURL}/countries`)
        return countries.map((item) => item.name);

    }catch(error){
        console.log(`Fetch Error Data from SelectOption ${error}`)
        return `Fetch Error Data from SelectOption ${error}`;
    }
} 