import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Colour, Data, PokemonResult } from "../types";



type ColourMapping = { [key: string]: string };

export function getBGPokemon(type: Colour) {
  const mappingColors: ColourMapping = {
    grass: "elm-grass",
    bug: "elm-bug",
    dark: "elm-dark",
    undefined: "elm-undefined",
    dragon: "elm-dragon",
    electric: "elm-electric",
    fairy: "elm-fairy",
    fighting: "elm-fighting",
    fire: "elm-fire",
    flying: "elm-flying",
    ghost: "elm-ghost",
    ground: "elm-ground",
    ice: "elm-ice",
    normal: "elm-normal",
    poison: "elm-poison",
    psychic: "elm-psychic",
    rock: "elm-rock",
    steel: "elm-steel",
    water: "elm-water",
  };
  const getType = type ? type.split(",")[0] : "undefined";
  return mappingColors[getType];
}


export function hasHomeSprite(data: Data) {
  if (data?.id >= 906 && data?.id <= 1008) {
    return false;
  } else {
    return true;
  }
}

export function isPokemonAvailable(data: Data) {
  if (data?.id >= 1009) {
    return false;
  } else {
    return true;
  }
}

export const getHomeSprite = (data: Data) =>
  data.sprites?.other?.home?.front_default;

export const getArtworkSprite = (data: Data) =>
  data?.sprites?.other["official-artwork"]["front_default"];

export const transformPokemonData = (res: {
  results: Array<PokemonResult>;
}) => {
  const { results } = res;
  const requests = results.map((result: PokemonResult) =>
    fetch(result.url).then((response) => response.json())
  );
  return Promise.all(requests).then((pokemonResponses) => {
    return pokemonResponses.map((d) => {
      let imageValue;
      if (hasHomeSprite(d)) {
        imageValue = getHomeSprite(d);
      } else {
        imageValue = getArtworkSprite(d);
      }
      return {
        data: d,
        imgValue: imageValue,
        types: d.types[0].type.name,
      };
    });
  });
};


export const roundedStats = (height:number, weight:number) => {
  return {
    roundHeight: Math.floor(height / 10),
    roundWeight: Math.floor(weight / 10)
  };
};