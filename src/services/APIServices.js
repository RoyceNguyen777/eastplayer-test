import axios from 'axios'


const APIService = {
    _getListCountry: async (search) => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
            return response
        } catch (error) {
            console.log(error)
        }
    }
}

export default APIService