"use client";

import { useJogadores } from "./hooks/useJogadores";
import Ranking from "./components/Ranking";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  const { jogadores, loading, error } = useJogadores();
  const categorias = [5, 4, 3, 2, 1];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Ranking de Jogadores
      </h1>

      <div className="flex justify-center mb-6 flex-wrap gap-3">
        <Button
          asChild
          className="bg-black text-white"
          style={{
            width: "100%",
            maxWidth: "200px",
          }}
        >
          <Link href="/votos">Ir para Votação</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          style={{
            width: "100%",
            maxWidth: "200px",
          }}
        >
          <Link href="/admin">Ir para Administração</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          style={{
            width: "100%",
            maxWidth: "200px",
          }}
        >
          <Link href="/graficos">Ir para Estatísticas</Link>
        </Button>
      </div>

      {loading && <p className="text-center">Carregando jogadores...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && (
        <Ranking jogadores={jogadores} categorias={categorias} />
      )}
    </div>
  );
};

export default Home;
