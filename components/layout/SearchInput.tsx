import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri'
import { useRouter } from "next/router";
import SearchReset from './SearchReset'

const SearchInput = () => {
  const navigate = useRouter();
  const [inputVal, setInputVal] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [hasInput, setHasInput] = useState(false)
  const [newQuery, setNewQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)
    const value = e.currentTarget.value

    if (value.length !== 0) {
      setHasInput(true)
    } else {
      setHasInput(false)
    }
  }
  // TODO: Fix - Search page doesn't allow a new search? input val check?
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setNewQuery(inputVal.trim())

    navigate.push({
      pathname: '/movies/search/',
      query: { name: `${inputVal}` }
    })
    setInputVal('')
    // if (inputVal.trim()) {
    //   setNewQuery(inputVal.trim())
    //   // route to search results page
    //   navigate.push({
    //     pathname: '/movies/search/',
    //     query: { name: `${inputVal}` }
    //   })
    // }
    
  };

  const handleInputReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInputVal('')
    navigate.push('/')
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }
  
  return (
    <div className='relative'>
      <form onSubmit={handleSubmit}>
        <label className="button searchbutton" htmlFor="searchright">
          <span className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"><RiSearchLine className="w-5 h-5 text-cyan-400" /></span>
        </label>
        <input
          className='flex h-10 pr-14 pl-10 text-sm text-cyan-400 bg-transparent rounded-md border border-cyan-400 focus:outline-none focus:border-1 focus:border-solid focus:border-cyan-300 hover:neon-shadow-soft duration-200'
          type='text'
          placeholder='Search Movie'
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={inputVal}
          onChange={handleChange}
          onKeyDown={(e) => e.stopPropagation()}
          onKeyUp={(e) => e.stopPropagation()}
          onKeyPress={(e) => e.stopPropagation()} 
        />
      </form>

      {isFocused
      ? <SearchReset onClick={handleInputReset} />
      : (hasInput
          ? <SearchReset onClick={handleInputReset} />
          : null
        )
      } 

    </div>
  );
};

export default SearchInput;
