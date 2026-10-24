
import { useState } from "react";
import { useRecoilState } from "recoil";
import { tarefasAtom } from "../atoms/tarefasAtom";

function TarefaForm() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useRecoilState(tarefasAtom);

  function adicionarTarefa(e) {
    e.preventDefault();

    if (!texto.trim()) return;

    const novaTarefa = {
      id: crypto.randomUUID(),
      texto: texto.trim(),
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
  }

  return (
    <form onSubmit={adicionarTarefa}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TarefaForm;
