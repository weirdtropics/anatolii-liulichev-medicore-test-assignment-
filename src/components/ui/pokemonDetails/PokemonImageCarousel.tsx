import { Box } from '@mui/material';

interface PokemonImageCarouselProps {
  images: string[];
  currentIndex: number;
  onSelect: (index: number) => void;
  alt: string;
  topRightSlot?: React.ReactNode;
}

export const PokemonImageCarousel = ({
  images,
  currentIndex,
  onSelect,
  alt,
  topRightSlot,
}: PokemonImageCarouselProps) => {
  const currentImage = images[currentIndex];

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={currentImage}
          alt={alt}
          sx={{
            height: 200,
            objectFit: 'contain',
          }}
        />

        {topRightSlot && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
            }}
          >
            {topRightSlot}
          </Box>
        )}
      </Box>
      <Box display="flex" gap={1} mt={2}>
        {images.map((_, idx) => (
          <Box
            key={idx}
            onClick={() => onSelect(idx)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: idx === currentIndex ? 'primary.main' : 'grey.400',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
