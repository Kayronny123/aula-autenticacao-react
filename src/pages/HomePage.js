import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import singup from "../api/singup";
import login from "../api/login";
import { navigateToUser } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  gap: 5px;
`;
function HomePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    login(form);
    console.log(localStorage.getItem("token"));
    navigateToUser(navigate, "rogerio-kayronny");
  };

  return (
    <main>
      <Header />
      <h1>Página Inicial</h1>
      <Form onSubmit={submitForm}>
        <label htmlFor="email">Login</label>
        <input
          id="email"
          name="email"
          type="text"
          input="form.email"
          onChange={onChange}
          placeholder="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label htmlFor="password">Senha</label>
        <input
          id="senha"
          name="password"
          type="password"
          input="form.password"
          onChange={onChange}
          placeholder="senha"
          required
        />
        <button>Login</button>
      </Form>
      <button onClick={singup}>Criar</button>
    </main>
  );
}
export default HomePage;
