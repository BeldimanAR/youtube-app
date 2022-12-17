import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

const options = {
  method: "GET",
  url: "https://youtube-v3-alternative.p.rapidapi.com/search",
  params: { query: "cat", geo: "US", lang: "en" },
  headers: {
    "X-RapidAPI-Key": "b4baec63demsh82ce290be2b9635p11c4bejsnd35e8314e03d",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(
    "https://youtube-v3-alternative.p.rapidapi.com/search",
    options
  );
  return data;
};
