import { useEffect, useState } from "react";

interface Props{
    placeholder?: string;
    onQuery: (query: string) => void;
}

const SearchBar = ({placeholder = 'Buscar', onQuery}:Props) => {

    const [query, setQuery] = useState('')

    useEffect(()=>{
        const TimeOut = setTimeout(()=>{
            onQuery(query)
        },700)

        return ()=>{
            clearTimeout(TimeOut)
        }
    },[query,onQuery])

    const handleSearch = () => {
        onQuery(query);
        setQuery('')
  };

    const handleKeyDow = (event:React.KeyboardEvent ) =>{
        if(event.key === 'Enter')
            handleSearch();
    }

  return (
    <div className="search-container">
      <input
        type='text'
        placeholder={placeholder}
        value={query}
        onChange={(event)=> setQuery(event.target.value)}
        onKeyDown={handleKeyDow}
      />
      <button>Buscar</button>
    </div>
  )
}

export default SearchBar
