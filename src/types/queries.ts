import { useInfiniteQuery } from '@tanstack/react-query';
import { PokemonCardData } from '@/schema/pokemon';

export type UsePokemonInfiniteQuery = ReturnType<
  typeof useInfiniteQuery<PokemonCardData[], Error, PokemonCardData[], string[], number>
>;
