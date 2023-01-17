import axios from "axios";

const login = (body) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rogerio-kayronny/login`;
  axios
    .post(url, body)
    .then((res) => localStorage.setItem("token", res.data.token))
    .catch((err) => console.log(err));
};
export default login;
