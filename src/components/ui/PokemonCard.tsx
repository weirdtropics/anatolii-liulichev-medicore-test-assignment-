import { Card, CardContent, Typography, CardMedia, IconButton, Box, Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PokemonCardData } from '@/schema/pokemon';

interface PokemonCardProps {
  pokemon: PokemonCardData;
  onClick?: () => void;
  isFavorite: boolean;
  onToggleFavorite: (pokemon: PokemonCardData) => void;
}

export const PokemonCard = ({
  pokemon,
  onClick,
  isFavorite,
  onToggleFavorite,
}: PokemonCardProps) => {
  const { id, name, image } = pokemon;

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(pokemon);
  };

  return (
    <Card
      onClick={onClick}
      sx={{
        minWidth: 300,
        maxWidth: 360,
        mx: 'auto',
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        px: 2,
        py: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        cursor: onClick ? 'pointer' : 'default',
      }}
      elevation={0}
    >
      <IconButton
        onClick={handleToggleFavorite}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
        }}
      >
        {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
      </IconButton>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            height: 150,
            width: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>

      <Divider sx={{ mt: 2, mb: 1 }} />

      <CardContent
        sx={{
          textAlign: 'left',
          pt: 0,
          px: 0,
          pb: 0,
        }}
      >
        <Typography variant="body1" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          #{id}
        </Typography>
      </CardContent>
    </Card>
  );
};
