import { z } from 'zod';

const NamedAPIResource = z.object({
  name: z.string(),
  url: z.string().url(),
});

export const StatSchema = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: NamedAPIResource,
});
export type StatZod = z.infer<typeof StatSchema>;

export const MoveSchema = z.object({
  move: NamedAPIResource,
});
export type MoveZod = z.infer<typeof MoveSchema>;

export const TypeSchema = z.object({
  slot: z.number(),
  type: NamedAPIResource,
});
export type TypeZod = z.infer<typeof TypeSchema>;

const OfficialArtworkSchema = z.object({
  front_default: z.string().nullable(),
  front_shiny: z.string().nullable().optional(),
});

export const SpritesSchema = z.object({
  other: z
    .object({
      'official-artwork': OfficialArtworkSchema.optional(),
    })
    .optional(),
});

export const PokemonResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  height: z.number(),
  weight: z.number(),
  base_experience: z.number(),
  types: z.array(TypeSchema),
  stats: z.array(StatSchema),
  moves: z.array(MoveSchema),
  sprites: SpritesSchema,
});
export type PokemonZod = z.infer<typeof PokemonResponseSchema>;

export const SpeciesSchema = z.object({
  flavor_text_entries: z.array(
    z.object({
      flavor_text: z.string(),
      language: z.object({
        name: z.string(),
      }),
    }),
  ),
});
export type PokemonSpeciesZod = z.infer<typeof SpeciesSchema>;

export const PokemonListItemSchema = NamedAPIResource;

export const PokemonListResponseSchema = z.object({
  results: z.array(PokemonListItemSchema),
});

export type ApiType = TypeZod;

export type PokemonCardData = {
  id: number;
  name: string;
  image: string;
  types?: string[];
};

export type FullPokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
  stats: StatZod[];
  moves: MoveZod[];
  base_experience: number;
  description: string;
};
