import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { CircularProgress } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';

import { PokemonCard } from '@/components/ui/PokemonCard';
import { PokemonDetailsModal } from '@/components/ui/PokemonDetailsModal';
import { useFavorites } from '@/hooks/useFavorites';
import { usePokemonListInfinite } from '@/hooks/usePokemonListInfinite';
import { usePokemonSearch } from '@/hooks/usePokemonSearch';
import { PokemonCardData } from '@/schema/pokemon';
import { toPokemonCardData } from '@/utils/pokemonUtils';

export const PokedexPage = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonCardData | undefined>();
  const [searchTerm, setSearchTerm] = useState('');

  const { isFavorite, toggleFavorite } = useFavorites();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }: UseInfiniteQueryResult<InfiniteData<PokemonCardData[]>> = usePokemonListInfinite();

  const { data: searchResult, isError: isSearchError } = usePokemonSearch(searchTerm);
  const { ref, inView } = useInView({ threshold: 1 });

  const showList: PokemonCardData[] = useMemo(() => {
    if (searchTerm) {
      return searchResult ? [toPokemonCardData(searchResult)] : [];
    }
    return data?.pages.flatMap((page) => page) ?? [];
  }, [searchTerm, searchResult, data]);

  const handleCloseModal = () => setSelectedPokemon(undefined);

  if (inView && hasNextPage && !searchTerm) {
    fetchNextPage();
  }
  return (
    <>
      <Box mb={3} display="flex" justifyContent="center">
        <TextField
          label="Search by name or number"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 500 }}
        />
      </Box>

      {searchTerm && isSearchError && (
        <Typography color="error" align="center">
          No Pokémon found.
        </Typography>
      )}

      <Box
        sx={{
          display: 'grid',
          gap: 3,
          justifyContent: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
        }}
      >
        {showList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => {
              setSelectedPokemon(pokemon);
            }}
            isFavorite={isFavorite(pokemon.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </Box>

      {!searchTerm && hasNextPage && (
        <Box ref={ref} mt={4} display="flex" justifyContent="center">
          {isFetchingNextPage && <CircularProgress />}
        </Box>
      )}

{selectedPokemon && (
  <PokemonDetailsModal
    open={true}
    onClose={handleCloseModal}
    pokemon={selectedPokemon}
    isFavorite={isFavorite(selectedPokemon.id)}
    toggleFavorite={toggleFavorite}
  />
)}
    </>
  );
};
