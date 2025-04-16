import { Box, Typography } from '@mui/material';

interface PokemonMoveListProps {
  moves: { move: { name: string } }[];
}

export const PokemonMoveList = ({ moves }: PokemonMoveListProps) => {
  const moveNames = moves.slice(0, 12).map((m) => m.move.name);

  return (
    <Box>
   <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
  Moves
</Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 1,
        }}
      >
        {moveNames.map((name, idx) => (
          <Box
            key={name}
            sx={{
              backgroundColor: idx % 2 === 0 ? '#f5f5f5' : '#aaa',
              color: idx % 2 === 0 ? 'black' : 'white',
              borderRadius: 1,
              px: 1.5,
              py: 0.5,
              fontSize: 14,
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            {name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
