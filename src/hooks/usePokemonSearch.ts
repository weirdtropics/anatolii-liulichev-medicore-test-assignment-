import { useQuery } from '@tanstack/react-query';
import { fetchPokemonByName } from '@/services/api';

export const usePokemonSearch = (name: string) => {
  return useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemonByName(name),
    enabled: !!name,
  });
};
