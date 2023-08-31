import * as React from "react";
import { useGetPokemonByNameQuery } from "./features/pokemon";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("pikachu");
  const { data, error, isLoading } = useGetPokemonByNameQuery(input);

  return (
    <div className="App">
      {error ? (
        // <>Oh no, there was an error</>
        <input value={input} onInput={(e) => setInput(e.target.value)} />
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <input value={input} onInput={(e) => setInput(e.target.value)} />

          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      )}
    </div>
  );
}
