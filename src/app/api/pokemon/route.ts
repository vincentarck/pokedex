import { NextResponse } from "next/server";
import { getArtworkSprite, getHomeSprite, hasHomeSprite } from "@/src/lib/utils";
import { PokemonResult } from "@/src/types";

export async function GET(request: Request) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((res) => {
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
    });
  return NextResponse.json(res);
}
