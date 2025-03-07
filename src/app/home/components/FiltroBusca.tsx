import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

interface FiltroBuscaProps {
  onSearch: (query: string) => void;
  onFilterChange: (filter: string) => void;
}

const FiltroBusca: React.FC<FiltroBuscaProps> = ({ onSearch, onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("estrela");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-6 mb-6 w-full">
      
      {/* Campo de busca */}
      <div className="relative w-full md:w-1/3">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" size={20} />
        <input
          type="text"
          placeholder="Buscar jogador..."
          value={search}
          onChange={handleSearchChange}
          className="border border-gray-300 dark:border-gray-600 rounded-lg pl-10 pr-4 py-2 w-full 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
        />
      </div>

      {/* Campo de filtro com seta dinâmica */}
      <div className="relative w-full md:w-1/3" onClick={() => setIsDropdownOpen((prev) => !prev)}>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="border border-gray-300 dark:border-gray-600 rounded-lg pl-3 pr-10 py-2 w-full 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 appearance-none"
        >
          <option value="estrela">Ordenar por Estrela (Padrão)</option>
          <option value="gols">Ordenar por Gols</option>
          <option value="assistencias">Ordenar por Assistências</option>
          <option value="nome">Ordenar por Nome</option>
        </select>

        {/* Ícone de seta animado */}
        <ChevronDown 
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-200 
                      ${isDropdownOpen ? "rotate-180" : "rotate-0"} text-gray-400 dark:text-gray-300`}
          size={20}
        />
      </div>

    </div>
  );
};

export default FiltroBusca;
