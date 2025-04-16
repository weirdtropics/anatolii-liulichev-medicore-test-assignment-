import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PokemonCardProps } from '@/types/props';
import { Snackbar } from '@mui/material';
import { useState } from 'react';

export const PokemonCard = ({
  pokemon,
  onClick,
  isFavorite,
  toggleFavorite,
}: PokemonCardProps) => {
  const { id, name, image } = pokemon;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');


  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(id);
  
    const message = `${name} has been ${isFavorite ? 'removed from' : 'added to'} your favourite list`;
    setSnackbarMessage(message);
    setSnackbarOpen(true);
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
      <Snackbar
  open={snackbarOpen}
  autoHideDuration={3000}
  onClose={() => setSnackbarOpen(false)}
  message={snackbarMessage}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
/>
    </Card>
    
  );
};
