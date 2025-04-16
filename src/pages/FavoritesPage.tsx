import { Box, Typography } from '@mui/material';
import { PokemonCard } from '@/components/ui/PokemonCard';
import { useFavorites } from '@/hooks/useFavorites';
import { usePokemonListInfinite } from '@/hooks/usePokemonListInfinite';

export const FavoritesPage = () => {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const { data } = usePokemonListInfinite();

  const pokemonList = data?.pages.flat() ?? [];
  const favoritePokemon = pokemonList.filter((pokemon) => favorites.includes(pokemon.id));

  return (
    <Box>
      {favoritePokemon.length ? (
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
          {favoritePokemon.map((p) => (
            <PokemonCard
              key={p.id}
              pokemon={p}
              isFavorite={isFavorite(p.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </Box>
      ) : (
        <Typography variant="body1">No favourites yet.</Typography>
      )}
    </Box>
  );
};
