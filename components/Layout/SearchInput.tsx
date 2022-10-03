import { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { useRouter } from "next/router"
import SearchReset from './SearchReset'

const SearchInput = () => {
  const navigate = useRouter()
  const [inputVal, setInputVal] = useState<string>("")
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [hasInput, setHasInput] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)

    const value = e.currentTarget.value

    if (value.length !== 0) {
      setHasInput(true)
    } else {
      setHasInput(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    navigate.push({
      pathname: '/movies/search/',
      query: { name: `${inputVal}` }
    })

    setInputVal('')
  }

  const handleInputReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInputVal('')
    navigate.push('/')
  }

  return (
    <div className='relative'>
      <form onSubmit={handleSubmit}>
        <label className="button searchbutton" htmlFor="searchright">
          <span className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"><RiSearchLine className="w-5 h-5 text-cyan-400" /></span>
        </label>
        <input
          className='flex h-9 pr-14 pl-10 text-sm text-cyan-400 bg-transparent rounded-md border border-cyan-400 focus:outline-none focus:border-1 focus:border-solid focus:border-cyan-300 hover:neon-shadow-soft duration-200'
          type='text'
          placeholder='Search Movie'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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
  )
}

export default SearchInput
