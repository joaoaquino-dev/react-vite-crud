import "./styles.css";
import Trash from "../../assets/trash.svg";

function Home() {
  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input type="text" name="name" />
        <input type="number" name="age" />
        <input type="email" name="email" />
        <button type="button">Cadastrar</button>
      </form>

      <div>
        <div>
          <p>Nome: </p>
          <p>Idade: </p>
          <p>Email: </p>
        </div>
        <button>
          <img src={Trash} alt="icone de lixeira" width={30} height={30} />
        </button>
      </div>
    </div>
  );
}

export default Home;
