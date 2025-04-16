import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { PokemonDetailsModalProps } from '@/types/props';
import { PokemonImageCarousel } from '@/components/ui/pokemonDetails/PokemonImageCarousel';
import { PokemonTypeChips } from '@/components/ui/pokemonDetails/PokemonTypeChips';
import { PokemonStatsChart } from '@/components/ui/pokemonDetails/PokemonStatsChart';
import { PokemonMoveList } from '@/components/ui/pokemonDetails/PokemonMoveList';
import { useFullPokemonDetails } from '@/hooks/useFullPokemonDetails';
import { useState } from 'react';

export const PokemonDetailsModal = ({
  open,
  onClose,
  pokemon,
  isFavorite,
  toggleFavorite,
}: PokemonDetailsModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { data, isLoading } = useFullPokemonDetails(pokemon.id);

  if (!pokemon || !data || isLoading) return null;

  const images = [pokemon.image];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pb: 1,
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight={600}>
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            #{data.id}
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <Divider />

      <DialogContent>
        <Box
          sx={{
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <PokemonImageCarousel
              images={images}
              currentIndex={currentImage}
              onSelect={setCurrentImage}
              alt={data.name}
              topRightSlot={
                <IconButton
                  onClick={() => toggleFavorite(data.id)}
                  color={isFavorite ? 'error' : 'default'}
                >
                  {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              }
            />
          </Box>

          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Description
            </Typography>
            <Typography variant="body2" paragraph>
              {data.description}
            </Typography>

            <Box mt={2}>
              <PokemonTypeChips types={data.types.map(type => ({ type: { name: type } }))} />
            </Box>
          </Box>

          <Box
            sx={{
              gridColumn: {
                xs: '1 / -1',
                md: 'span 1',
              },
            }}
          >
            <PokemonStatsChart stats={data.stats} experience={data.base_experience} />
          </Box>

          <Box
            sx={{
              gridColumn: {
                xs: '1 / -1',
                md: 'span 1',
              },
            }}
          >
            <PokemonMoveList moves={data.moves} />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
