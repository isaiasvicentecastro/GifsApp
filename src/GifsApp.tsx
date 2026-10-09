import GifList from './gif/components/GifList'
import PreviousSearches from './gif/components/PreviousSearches'
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import useGisfApp from './hooks/useGisfApp'

export const GifsApp = () => {

    const {gifs, previousTerms, handleSearch, handleTermClicked} = useGisfApp();


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
