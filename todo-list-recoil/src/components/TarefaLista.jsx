
import { useRecoilState, useRecoilValue } from "recoil";
import { tarefasAtom } from "../atoms/tarefasAtom";
import { tarefasFiltradasSelector } from "../selectors/tarefasFiltradasSelector";

function TarefaLista() {
  const [tarefas, setTarefas] = useRecoilState(tarefasAtom);
  const tarefasFiltradas = useRecoilValue(tarefasFiltradasSelector);

  function concluirTarefa(id) {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === id
        ? { ...tarefa, concluida: !tarefa.concluida }
        : tarefa
    );

    setTarefas(novasTarefas);
  }

  function removerTarefa(id) {
    const novasTarefas = tarefas.filter(
      (tarefa) => tarefa.id !== id
    );

    setTarefas(novasTarefas);
  }

  return (
    <ul className="lista-tarefas">
      {tarefasFiltradas.map((tarefa) => (
        <li key={tarefa.id} className="tarefa">
          <span
            style={{
              textDecoration: tarefa.concluida
                ? "line-through"
                : "none",
            }}
          >
            {tarefa.texto}
          </span>

          <div>
            <button onClick={() => concluirTarefa(tarefa.id)}>
              {tarefa.concluida ? "Desfazer" : "Concluir"}
            </button>

            <button onClick={() => removerTarefa(tarefa.id)}>
              Remover
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TarefaLista;
