import { useQuery } from '@tanstack/react-query';
import { fetchFullPokemonDetails } from '@/services/api';
import { FullPokemon } from '@/schema/pokemon';

export const useFullPokemonDetails = (id: number | undefined) => {
  return useQuery<FullPokemon>({
    queryKey: ['pokemon-full', id],
    enabled: !!id,
    queryFn: () => fetchFullPokemonDetails(id!),
    staleTime: 1000 * 60 * 10,
    retry: false,
  });
};
