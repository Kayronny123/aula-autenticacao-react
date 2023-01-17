import axios from "axios";

const getTripDetails = (aluno, id) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${id}`;
  const headers = {
    headers: {
      auth: localStorage.getItem("token")
    }
  };
  axios
    .get(url, headers)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
export default getTripDetails;
