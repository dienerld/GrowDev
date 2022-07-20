import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemon = async (value: number | string) => {
  try {
    const res = await axios.get(`${BASE_URL}/pokemon/${value}`);
    return res.data;
  } catch (error) {
    console.log(error);

    throw new Error('Something went wrong');
  }
};
