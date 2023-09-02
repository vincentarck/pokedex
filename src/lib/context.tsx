// PokemonContext.tsx

import React, { createContext, useContext, useState } from "react";

interface Pokemon {
  name?: string;
}

interface PokemonContextType {
  likedPokemons: Pokemon;
  likePokemon: (pokemon: string) => void;
  unlikePokemon: (pokemon: string) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
};

export const PokemonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [likedPokemons, setLikedPokemons] = useState({});

  const likePokemon = (pokemon: string) => {
    const newState = {
      ...likedPokemons
    }
    // @ts-ignore
    newState[pokemon] = true
    setLikedPokemons(newState);
  };

  const unlikePokemon = (pokemon: string) => {
    const newState = { ...likePokemon };

    // @ts-ignore
    delete newState[pokemon];

    setLikedPokemons(newState);
  };

  return (
    <PokemonContext.Provider
      value={{ likedPokemons, likePokemon, unlikePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
