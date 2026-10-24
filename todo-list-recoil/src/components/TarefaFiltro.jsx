
import { useRecoilState } from "recoil";
import { filtroAtom } from "../atoms/filtroAtom";

function TarefaFiltro() {
  const [filtro, setFiltro] = useRecoilState(filtroAtom);

  return (
    <div className="filtros">
      <button
        className={filtro === "todas" ? "ativo" : ""}
        onClick={() => setFiltro("todas")}
      >
        Todas
      </button>

      <button
        className={filtro === "concluidas" ? "ativo" : ""}
        onClick={() => setFiltro("concluidas")}
      >
        Concluídas
      </button>

      <button
        className={filtro === "pendentes" ? "ativo" : ""}
        onClick={() => setFiltro("pendentes")}
      >
        Pendentes
      </button>
    </div>
  );
}

export default TarefaFiltro;
