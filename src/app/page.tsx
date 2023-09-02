import { LazyPokemons } from "@/src/components";
import { getPokemon } from "./action";
import Providers from "../components/Providers";

// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
// Because folder structure is diffrent one

export default async function Home() {
  const data = await getPokemon();
  return (
    <main className="relative -z-[1]">
      <Providers>
        <LazyPokemons pokemons={data} />
      </Providers>
    </main>
  );
}
