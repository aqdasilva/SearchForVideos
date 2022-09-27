import axios from 'axios';

const KEY = 'AIzaSyDvv7lbPJtrUBOmlvJt-cjYJ_nRe_v7NyQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

