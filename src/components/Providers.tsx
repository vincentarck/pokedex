"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokemonProvider, usePokemon } from "../lib/context";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {

  return (
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>{children}</PokemonProvider>
    </QueryClientProvider>
  );
};

export default Providers;
