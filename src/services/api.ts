import axios from 'axios';
import { PokemonResponseSchema, PokemonListResponseSchema, SpeciesSchema } from '@/schema/pokemon';
import { PokemonZod, PokemonSpeciesZod, FullPokemon, PokemonCardData } from '@/schema/pokemon';

import { BASE_API_URL } from '@/constants';

export const fetchPokemonById = async (id: number): Promise<PokemonZod> => {
  const response = await axios.get(`${BASE_API_URL}/pokemon/${id}`);
  return PokemonResponseSchema.parse(response.data);
};

export const fetchPokemonSpeciesById = async (id: number): Promise<PokemonSpeciesZod> => {
  const response = await axios.get(`${BASE_API_URL}/pokemon-species/${id}`);
  return SpeciesSchema.parse(response.data);
};

export const fetchPokemonByName = async (name: string): Promise<PokemonZod> => {
  try {
    const response = await axios.get(`${BASE_API_URL}/pokemon/${name}`);
    return PokemonResponseSchema.parse(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error(`Pokémon "${name}" not found`);
    }
    throw new Error('Failed to fetch Pokémon by name');
  }
};

export const getPokemonDescription = (species: PokemonSpeciesZod): string => {
  return (
    species.flavor_text_entries
      .find(entry => entry.language.name === 'en')
      ?.flavor_text.replace(/\f/g, ' ') ?? 'No description available.'
  );
};

const getIdFromUrl = (url: string): number => {
  const parts = url.split('/').filter(Boolean);
  return parseInt(parts[parts.length - 1], 10);
};

const getImageUrl = (id: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export const fetchPokemonPage = async (
  offset: number,
  limit: number,
): Promise<PokemonCardData[]> => {
  const response = await axios.get(`${BASE_API_URL}/pokemon?limit=${limit}&offset=${offset}`);
  const parsed = PokemonListResponseSchema.parse(response.data);

  return parsed.results.map(({ name, url }) => {
    const id = getIdFromUrl(url);
    return {
      id,
      name,
      image: getImageUrl(id),
    };
  });
};

export const fetchFullPokemonDetails = async (id: number): Promise<FullPokemon> => {
  const [pokemonResponse, speciesResponse] = await Promise.all([
    axios.get(`${BASE_API_URL}/pokemon/${id}`),
    axios.get(`${BASE_API_URL}/pokemon-species/${id}`),
  ]);

  const pokemon = PokemonResponseSchema.parse(pokemonResponse.data);
  const species = SpeciesSchema.parse(speciesResponse.data);

  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.other?.['official-artwork']?.front_default ?? '/placeholder.png',
    types: pokemon.types.map(t => t.type.name),
    stats: pokemon.stats,
    moves: pokemon.moves,
    base_experience: pokemon.base_experience,
    description: getPokemonDescription(species),
  };
};
