
import TarefaForm from "./components/TarefaForm";
import TarefaLista from "./components/TarefaLista";
import TarefaFiltro from "./components/TarefaFiltro";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Minha Lista de Tarefas</h1>
      <p>Gerencie suas tarefas com React e Recoil</p>

      <TarefaForm />
      <TarefaFiltro />
      <TarefaLista />
    </div>
  );
}

export default App;
