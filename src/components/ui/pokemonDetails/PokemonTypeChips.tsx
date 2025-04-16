import { Box, Chip } from '@mui/material';

interface PokemonTypeChipsProps {
  types: { type: { name: string } }[];
}

export const PokemonTypeChips = ({ types }: PokemonTypeChipsProps) => {
  return (
    <Box mt={3}>
      <Box display="flex" gap={1} mt={1} flexWrap="wrap">
        {types.map((t) => (
          <Chip key={t.type.name} label={t.type.name} />
        ))}
      </Box>
    </Box>
  );
};
