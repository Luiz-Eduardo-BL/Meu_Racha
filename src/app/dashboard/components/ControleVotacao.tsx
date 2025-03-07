// src/components/ControleVotacao.tsx
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ControleVotacaoProps {
  votacaoLiberada: boolean;
  onToggleVotacao: () => void;
}

const ControleVotacao: React.FC<ControleVotacaoProps> = ({ votacaoLiberada, onToggleVotacao }) => {
  return (
    <Card className="w-full max-w-md min-h-[475px] flex flex-col bg-card dark:bg-gray-900 text-card-foreground dark:text-white transition-colors duration-300 border border-border dark:border-gray-700 shadow-md">
      <CardHeader className="text-center">
        <CardTitle className="text-lg font-semibold">Controle de Votação</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center flex-grow">
        <p className="mb-4 text-gray-900 dark:text-gray-300">
          Status atual: {votacaoLiberada ? "Liberada" : "Bloqueada"}
        </p>
        <Button 
          onClick={onToggleVotacao} 
          className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 rounded-lg hover:bg-opacity-80 transition-colors duration-200"
        >
          {votacaoLiberada ? "Bloquear Votação" : "Liberar Votação"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ControleVotacao;
