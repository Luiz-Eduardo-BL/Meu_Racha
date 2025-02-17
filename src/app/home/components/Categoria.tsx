import JogadorCard from "./JogadorCard";
import { Jogador } from "../types";
import { calcularMedia } from "../utils/calcularMedia";

const Categoria: React.FC<{ categoria: number; jogadores: Jogador[] }> = ({ categoria, jogadores }) => {
  const jogadoresFiltrados = jogadores
    .map((jogador) => ({
      ...jogador,
      media: calcularMedia(jogador.votos).media, 
      categoriaCalculada: calcularMedia(jogador.votos).categoria, 
    }))
    .filter((jogador) => jogador.categoriaCalculada === categoria) 
    .sort((a, b) => b.media - a.media);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-center">
        {categoria} Estrela{categoria > 1 && "s"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {jogadoresFiltrados.map((jogador) => (
          <JogadorCard key={jogador.id} jogador={jogador} />
        ))}
      </div>
    </div>
  );
};

export default Categoria;
