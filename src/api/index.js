import axios from 'axios';

// const host = process.env.base;

const API = {
    getCurrency(from, to) {
        
        const apiKey = "f68b13604ac8e570a00f7d8fe7f25e1b";
        const urlApi = `http://data.fixer.io/api/latest?access_key=${apiKey}&format=1`;

        return axios.get(urlApi)
            .then((response) => {
                console.log(response.data)
                const rates = response.data.rates;
                const euro = 1 / rates[from];
                const convert = euro * rates[to];
                return convert.toFixed(4)
            }).catch((err) => {
                console.log(err);
                return err;
            });
    }
  };
  
  export default API;