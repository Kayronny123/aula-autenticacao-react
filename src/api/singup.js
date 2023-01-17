import axios from "axios";

const singup = () => {
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rogerio-kayronny/signup";
  const body = {
    email: "rogerio-kayronny@gmail.com",
    password: "123456789"
  };
  axios
    .post(url, body)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default singup;
