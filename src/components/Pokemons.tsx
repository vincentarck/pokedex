"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBGPokemon, transformPokemonData } from "@/src/lib/utils";
import useIntersectionObserver from "@/src/lib/hook";
import { Colour, Data, PokemonsData } from "../types";
import { useMutation } from "@tanstack/react-query";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePokemon } from "../lib/context";

type Props = {
  pokemons: Array<{
    data: Data;
    imgValue: string;
    types: Colour;
  }>;
};
export default function Main({ pokemons }: Props) {
  const targetRef = useRef(null);
  const queryClient = new QueryClient();
  const [pokemonData, setPokemonData] = useState(pokemons);
  const { likedPokemons, likePokemon, unlikePokemon } = usePokemon();
  const { isLoading, mutate } = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${pokemonData.length + 10}`
      );
      const data = await res.json();
      const getFullData = await transformPokemonData(data);
      setPokemonData((prevData) => [...prevData, ...getFullData]); // Append new data
    },
  });

  const isLastCardVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isLastCardVisible && !isLoading) {
      mutate();
    }
  }, [isLastCardVisible, isLoading, mutate]);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(15.25rem,1fr))] gap-[0.875rem] px-3.5 pt-12 pb-20 lg:px-6 lg:py-12 relative -z-[1]">
        {pokemonData?.map((pokemon, ind) => {
          const {
            data: { forms },
            types,
            imgValue,
          } = pokemon;
          const name = forms[0].name;
          const backgroundClass = getBGPokemon(types);
          const backgroundColor = `var(--${backgroundClass})`;

          return (
            <Link
              className="pokemon-card group cursor-pointer"
              style={{ backgroundColor }}
              href={`/pokemon/${name}`}
              key={name}
            >
              <b className="col-span-3 text-xl capitalize">{name}</b>
              <b className="col-span-2 pt-3.5">Type:</b>
              <div className="col-span-2 -mr-5 capitalize">{types}</div>
              <Image
                width={100}
                loading="lazy"
                height={100}
                src={imgValue}
                alt="pokemonLogo"
                className="group-hover:scale-125"
              />
              
              {
                // @ts-ignore
              likedPokemons[name] && <p>You Like This Pokemon</p>}
              <div className="pokeball-flat"></div>
              {/* Only show loading indicator for the last card */}
              {ind === pokemonData.length - 1 && isLoading && (
                <p className="text-lg font-bold bg-slate-700 p-3">
                  Loading ...
                </p>
              )}
            </Link>
          );
        })}
        <div ref={targetRef}></div>
      </div>
    </QueryClientProvider>
  );
}
