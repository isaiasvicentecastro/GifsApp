import { useState } from 'react'
import GifList from './gif/components/GifList'
import PreviousSearches from './gif/components/PreviousSearches'
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import { GetGifsByQuery } from './gif/action/get-gifs-by-query.action'
import type { Gif } from './gif/interfaces/gif.interface'

const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([])
    const [gifs,setGifs] = useState<Gif[]>([])

    const handleTermClicked = (term: string) =>{
        console.log({term})
    }

    const handleSearch = async(query:string = '') =>{
        query = query.trim().toLowerCase();
        if(query.length === 0) return

        if(previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].splice(0,7));
        const gifs = await GetGifsByQuery(query)
        console.log('GIFS QUE LLEGARON', gifs)
        setGifs(gifs)
    }


  return (
    <div>
        {/* Header */}
      <CustomHeader title='Buscador de Gifs' description='Busca el gif de tu preferencia'/>

        {/* Search */}
      <SearchBar placeholder='Busca tu gif' onQuery={handleSearch}/>

      {/* Previous Searches */}
      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>
    
        {/* Gifs */}
      <GifList gifs={gifs}/>
    </div>
  )
}

export default GifsApp
