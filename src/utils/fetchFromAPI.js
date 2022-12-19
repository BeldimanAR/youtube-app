import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    // relatedToVideoId: "7ghhRHRP6t4",
    // type: "video",
    // part: "id,snippet",
    maxResults: "50",
    // order: "date",
    // regionCode: "US",
    // q: "music",
  },
  headers: {
    "X-RapidAPI-Key": "b4baec63demsh82ce290be2b9635p11c4bejsnd35e8314e03d",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
