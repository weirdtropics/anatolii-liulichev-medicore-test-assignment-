import { PokemonZod } from '@/schema/pokemon';
import { PokemonCardData } from '@/schema/pokemon';

export const toPokemonCardData = (pokemon: PokemonZod): PokemonCardData => ({
  id: pokemon.id,
  name: pokemon.name,
  image:
    pokemon.sprites.other?.['official-artwork']?.front_default ?? '/placeholder.png',
  types: pokemon.types.map((t) => t.type.name),
});