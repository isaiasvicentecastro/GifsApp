import { useRef, useState } from "react"
import type { Gif } from "../gif/interfaces/gif.interface"
import { GetGifsByQuery } from "../gif/action/get-gifs-by-query.action"

//const gifsCache: Record<string, Gif[]> = {};

const useGisfApp = () => {

    const [gifs,setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([])

    //Hace que no haga un re-render y poder trabajarlo dentro de useGifApp
    //si no usamos useRed, lo tendiamos que sacar como el comentario
    //que está afuera
    const gifsCache = useRef<Record<string, Gif[]>>({})

    const handleTermClicked = async(term: string) =>{

        //Para guardar en cache primero preguntamos si exite
        //se pone ".current" para que apunte al valor
        //actual que se encuentra en mi caché
        if(gifsCache.current[term]){
            setGifs(gifsCache.current[term])
            return
        }

        const gifs = await GetGifsByQuery(term)
        setGifs(gifs)
    }

    const handleSearch = async(query:string = '') =>{
        query = query.trim().toLowerCase();
        if(query.length === 0) return

        if(previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].splice(0,7));
        const gifs = await GetGifsByQuery(query)
        setGifs(gifs)

        //Es para grabar mi busquedas en gifsCache
        gifsCache.current[query] = gifs;
        console.log(gifsCache)
    }

  return {
    gifs,
    previousTerms,

    handleTermClicked,
    handleSearch
  }
}

export default useGisfApp
