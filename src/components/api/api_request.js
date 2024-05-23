import axios from 'axios'


// Запросы в Api =-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Events =-=-=-=-=-=-=
export async function apiGetAllEvents() {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://dev.mydance.photo/api/v1/catalog/get_all'
        })
        return response.data;

    } catch (error) {
        console.log(error);
    }
}

