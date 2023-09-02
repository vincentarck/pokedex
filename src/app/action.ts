"use server";
import {
  getArtworkSprite,
  getHomeSprite,
  hasHomeSprite,
  transformPokemonData,
} from "@/src/lib/utils";
import { PokemonResult } from "@/src/types";

type Params = {
  limit?: number; 
};

export async function getPokemon(params: Params = { limit: 20 }) {
  const {limit} = params
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {
    cache: "force-cache",
  })
    .then((res) => res.json())
    .then(transformPokemonData);
  return res;
}
 