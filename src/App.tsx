import { useEffect, useState } from "react";
import { Character } from "./models/character";

function App() {
  const [characters, setCharacters] = useState<Character[]>([])



  const url = `https://bobsburgers-api.herokuapp.com/characters/?limit=20`



  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setCharacters(d))
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  return (
    <div className="w-full h-dvh p-4 flex flex-col gap-4">
      <h1 className=' text-mf-pink text-center text-3xl font-bold'>
        Personagens Bobs Burguers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {characters.map((character) =>
          <div className="max-w-[300px] border border-gray-400 rounded-xl overflow-hidden" key={character.id}>
            <img src={character.image} alt={character.name} className="w-full h-60 object-cover" />
            <div className="bg-mf-primary bg-opacity-90  py-2 px-4 h-full">
              <h3 className="text-lg font-semibold text-mf-pink">Name: <span className="text-base font-medium text-mf-secondaryVariation">{character.name}</span></h3>
              <h3 className="text-lg font-semibold text-mf-pink">Gender: <span className="text-base font-medium text-mf-secondaryVariation">{character.gender}</span></h3>
              {character.occupation && <h3 className="text-lg font-semibold text-mf-pink">Occupation: <span className="text-base font-medium text-mf-secondaryVariation">{character.occupation}</span></h3>}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default App
