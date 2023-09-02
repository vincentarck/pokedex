"use client";
import React, { useEffect, useState } from "react";
import { getBGPokemon } from "@/src/lib/utils";
import {
  hasHomeSprite,
  getArtworkSprite,
  getHomeSprite,
} from "@/src/lib/utils";
import Image from "next/image";
import { Data, Type } from "@/src/types";
import { usePokemon } from "@/src/lib/context";
import ProgressBar from "@/src/components/ProgressBar";
import { Colour } from "@/src/types";

export default function Content({ slug }: { slug: string }) {
    const [pokemon, setPokemon] = useState<{ data: Data; imgValue: string; types: string }>({
        data: {} as Data,
        imgValue: "",
        types: "",
      });
      const { data, imgValue, types } = pokemon as { data: Data; imgValue: string; types: Colour };
  const backgroundColor = `var(--${getBGPokemon(types)})`;
  const { likedPokemons, likePokemon, unlikePokemon } = usePokemon();
  useEffect(() => {
    async function getPokemonDetail(name: string) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((res) => {
          let imageValue;
          if (hasHomeSprite(res)) {
            imageValue = getHomeSprite(res);
          } else {
            imageValue = getArtworkSprite(res);
          }
          setPokemon({
            data: res,
            imgValue: imageValue,
            types: res.types[0].type.name,
          });
        });
      return res;
    }
    getPokemonDetail(slug);
  }, []);

  // @ts-ignore
  const selectedPokemon = likedPokemons[slug];
  const favouritePokemon = (
    <button
      onClick={() =>
        selectedPokemon ? unlikePokemon(slug) : likePokemon(slug)
      }
      className="ml-5 mt-5 max-w-max p-2 rounded-md bg-white font-semibold text-md text-black"
    >
      {selectedPokemon
        ? "This is your Favaourites Pokemons"
        : "Liked This Pokemon"}{" "}
    </button>
  );
  return (
    <section className="pokemon-detail-main-card" style={{ backgroundColor }}>
      <div className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 md:h-80 md:w-80" />
      <div className="pokeball-flat right-20 top-64 origin-top-right -rotate-12 scale-[2.2] sm:right-32 sm:scale-[2.8]"></div>
      <h1 className="h1 relative col-span-full capitalize mt-10 ml-5">
        {slug}
      </h1>
      {favouritePokemon}
      <div className="flex-col-reverse gap-6 lg:flex-row flex items-end justify-between  pr-6">
        <div className="bg-slate-700 min-w-[400px] lg:ml-5 lg:min-w-[450px] flex gap-8 flex-col py-6 px-5 rounded-md">
          {pokemon.data.stats?.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgColor={backgroundColor}
              completed={item.base_stat}
              desc={item.stat.name}
            />
          ))}
        </div>
        <div>
          <Image
            priority
            className="relative inset-x-0 inline-block  w-[400px] drop-shadow-2xl"
            src={imgValue}
            width={200}
            height={300}
            alt={`${slug}-image`}
          />
          <div id="_pokemon-detail-base-props" className="flex justify-evenly">
            <div className="">
              <div className="flex justify-center gap-1.5 pb-1">
                {data?.types?.map((type: Type) => (
                  <div
                    style={{
                      // @ts-ignore
                      backgroundColor: `var(--${getBGPokemon(type.type.name)})`,
                    }}
                    className={`h-3.5 w-3.5 rounded-full`}
                  ></div>
                ))}
              </div>
              <div>
                {data?.types?.map((type: Type) => (
                  <p className="font-medium capitalize">
                    {data?.types?.length > 1
                      ? type.type.name + " / "
                      : type.type.name}
                  </p>
                ))}
              </div>
              <div className="text-gray-500">Type</div>
            </div>
            <div className="border-l border-slate-100 border-r px-7">
              <div className="pb-0.5 text-xl font-bold">1 m</div>
              <div className="text-gray-500">Height</div>
            </div>
            <div>
              <div className="pb-0.5 text-xl font-bold">13 kg</div>
              <div className="text-gray-500">Weight</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
