import axios from 'axios';

// const host = process.env.base;

const api = {
    async getCurrency(from, to) {
        const urlApi = "http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1";
            axios.get(urlApi)
                .then((response) => {
                    const rates = response.data.rates;
                    const euro = 1 / rates[from];
                    const convert = euro * rates[to];
                    console.log(from, to)
                    console.log(`1 ${from} equals ${convert.toFixed(4)} ${to}`)
                }).catch((err) => {
                    console.log(err);
                });
    }
  };
  
  export default api;