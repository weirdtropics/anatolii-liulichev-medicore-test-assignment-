import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPokemonPage } from '@/services/api';
import { PokemonCardData } from '@/schema/pokemon';
import { InfiniteData } from '@tanstack/react-query';
import { LIMIT, MAX_POKEMON } from '@/constants';

export const usePokemonListInfinite = () => {
  return useInfiniteQuery<
    PokemonCardData[],
    Error,
    InfiniteData<PokemonCardData[]>,
    string[],
    number
  >({
    queryKey: ['pokemonList'],
    initialPageParam: 0,
    queryFn: async ({ pageParam }) => {
      const offset = pageParam;
      const remaining = MAX_POKEMON - offset;
      const limit = Math.min(LIMIT, remaining);
      return fetchPokemonPage(offset, limit);
    },
    getNextPageParam: (_, allPages) => {
      const loadedCount = allPages.flat().length;
      return loadedCount >= MAX_POKEMON ? undefined : loadedCount;
    },
    staleTime: 1000 * 60 * 10,
  });
};
