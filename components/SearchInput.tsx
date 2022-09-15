import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri'
import { useRouter } from "next/router";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const TIME = 3000; // ms

const SearchInput = ({ setQuery }: Props) => {
  const navigate = useRouter();
  const [inputVal, setInputVal] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [hasInput, setHasInput] = useState(false)

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

    if (inputVal.trim()) {
      setQuery(inputVal.trim())
    } 
  };
  
  const handleInputReset = () => {

    setInputVal('')
    navigate.reload()
    
    // if (inputVal.length !== 0) {
    //   setInputVal('')
    //   navigate.reload()
    // } else return

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
          className='flex h-10 pr-14 pl-10 text-sm text-cyan-400 bg-transparent rounded-md border border-cyan-400 focus:outline-none focus:border-1 focus:border-solid focus:border-cyan-300'
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

      {isFocused ? 
        <>
        <button
          onClick={handleInputReset}
          // onFocus={() => setIsFocused(true)}
          className={`flex absolute inset-y-0 right-0 items-center pr-3 text-cyan-400`}
        >
          x
        </button>
        </>
       : (hasInput ? 
        <>
          <button
          onClick={handleInputReset}
          // onFocus={() => setIsFocused(true)}
          className={`flex absolute inset-y-0 right-0 items-center pr-3 text-cyan-400`}
        >
          x
        </button>
        </> : null) } 

    </div>
  );
};

export default SearchInput;

// ${isFocused ? `visible` : `invisible`}