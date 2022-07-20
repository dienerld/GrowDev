type TGetPokemon = {
  type: 'getPokemon',
  payload: string | number
}

export type Action = TGetPokemon;
