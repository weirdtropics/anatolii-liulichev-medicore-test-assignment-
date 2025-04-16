import { PokemonCardData } from '@/schema/pokemon';

export interface PokemonCardProps extends WithPokemon, WithFavorite {
  onClick?: () => void;
}

export interface PokemonDetailsModalProps extends WithPokemon, WithFavorite {
  open: boolean;
  onClose: () => void;
}
  export interface WithFavorite {
    isFavorite: boolean;
    toggleFavorite: (id: number) => void;
  }
  
  export interface WithPokemon {
    pokemon: PokemonCardData;
  }
