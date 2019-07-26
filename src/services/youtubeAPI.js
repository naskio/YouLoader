import axios from 'axios';

const youtubeAPI = 'https://www.googleapis.com/youtube/v3/videos';

const youtubeAPIKey = 'AIzaSyDgyCsCFg7gxgoaUG1Tjz5QGyRHBSo3XUo';

export default id => {
    return axios.get(youtubeAPI, {
        params: {
            key: youtubeAPIKey,
            id,
            part: 'id,snippet',
        },
    });
};
