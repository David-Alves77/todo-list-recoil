
import { selector } from "recoil";
import { tarefasAtom } from "../atoms/tarefasAtom";
import { filtroAtom } from "../atoms/filtroAtom";

export const tarefasFiltradasSelector = selector({
  key: "tarefasFiltradasSelector",

  get: ({ get }) => {
    const tarefas = get(tarefasAtom);
    const filtro = get(filtroAtom);

    switch (filtro) {
      case "concluidas":
        return tarefas.filter((tarefa) => tarefa.concluida);

      case "pendentes":
        return tarefas.filter((tarefa) => !tarefa.concluida);

      default:
        return tarefas;
    }
  },
});
