import { Box, Typography } from '@mui/material';
import { StatZod } from '@/schema/pokemon';
import { MAX_EXP, MAX_STAT } from '@/constants';

interface PokemonStatsChartProps {
  stats: StatZod[];
  experience: number;
}

export const PokemonStatsChart = ({ stats, experience }: PokemonStatsChartProps) => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Base stats
      </Typography>

      {stats.map(stat => {
        const value = stat.base_stat;
        const name = stat.stat.name.toUpperCase();
        const percentage = Math.min((value / MAX_STAT) * 100, 100);

        return (
          <Box key={name} mb={1}>
            <Box display="flex" justifyContent="space-between" mb={0.5}>
              <Typography variant="body2">{name}</Typography>
              <Typography variant="body2">
                {value} / {MAX_STAT}
              </Typography>
            </Box>

            <Box
              sx={{
                height: 20,
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: `${percentage}%`,
                  height: '100%',
                  backgroundColor: '#aaa',
                }}
              />
            </Box>
          </Box>
        );
      })}

      <Box>
        <Box display="flex" justifyContent="space-between" mb={0.5}>
          <Typography variant="body2">EXP</Typography>
          <Typography variant="body2">
            {experience} / {MAX_EXP}
          </Typography>
        </Box>
        <Box
          sx={{
            height: 20,
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: `${Math.min((experience / MAX_EXP) * 100, 100)}%`,
              height: '100%',
              backgroundColor: '#aaa',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
