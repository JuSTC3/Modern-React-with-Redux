import axios from 'axios';

const serachImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID Access-Key'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default serachImages;