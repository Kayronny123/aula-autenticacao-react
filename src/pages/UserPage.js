import { useParams } from "react-router-dom";
import getTrip from "../api/getTrip";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import getTripDetails from "../api/getTripDetails";

function UserPage() {
  const [viagens, setViagens] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getTrip(setViagens);
  }, []);

  return (
    <main>
      <Header />
      <h1>Página acerca do usuário {id}</h1>
      {viagens.map((viagem) => {
        console.log(viagem);
        return (
          <>
            <ul>
              <li>id:{viagem.id}</li>
              <li>nome:{viagem.name}</li>
              <li>descrição: {viagem.description}</li>
            </ul>
            <button onClick={() => getTripDetails(id, viagem.id)}>
              Detalhes
            </button>
          </>
        );
      })}
    </main>
  );
}

export default UserPage;
