import axios from "axios";

const getTrip = (setData) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rogerio-kayronny/trips`;

  axios
    .get(url)
    .then((res) => setData(res.data.trips))
    .catch((err) => console.log(err));
};
export default getTrip;
