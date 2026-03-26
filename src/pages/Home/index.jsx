import { useEffect, useState, useRef } from "react";
import "./styles.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    try {
      setLoading(true);
      setError(null);
      const usersFromApi = await api.get("/users");
      setUsers(usersFromApi.data);
    } catch (err) {
      setError("Erro ao carregar usuários. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id) {
    try {
      await api.delete(`/users/${id}`);
      await getUsers();
    } catch (err) {
      console.error("Erro ao deleter usuário:", err);
    }
  }

  async function createByInputs() {
    if (
      !inputName.current.value ||
      !inputAge.current.value ||
      !inputEmail.current.value
    ) {
      alert("Preencha todos os campos");
      return;
    }
    try {
      setError(null);
      await api.post("/users", {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value,
      });
      await getUsers();
      inputName.current.value = "";
      inputAge.current.value = "";
      inputEmail.current.value = "";
    } catch (err) {
      setError("Erro ao cadastrar usuário. Tente novamente.", err);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input type="text" name="name" placeholder="Nome" ref={inputName} />
        <input type="number" name="age" placeholder="Idade" ref={inputAge} />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          ref={inputEmail}
        />
        <button type="button" onClick={createByInputs} disabled={loading}>
          {loading ? "Aguarde..." : "Cadastrar"}
        </button>
      </form>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button onClick={() => deleteUser(user.id)}>
            <img src={Trash} alt="icone de lixeira" width={60} height={60} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
