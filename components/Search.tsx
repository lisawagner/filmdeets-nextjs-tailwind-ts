import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { RiSearchLine } from 'react-icons/ri'
import { useRouter } from "next/router";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const TIME = 3000; // ms

const Search = ({ setQuery }: Props) => {
  const [text, setText] = useState('');
  const navigate = useRouter();
  const timer = useRef<NodeJS.Timeout>(null);
  const [inputVal, setInputVal] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const targetRef = useRef(null)
  
  const showCloseBtn = isFocused
  
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null);
  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.currentTarget.value;

  //   clearTimeout(timer.current);

  //   setText(value);

  //   timer.current = setTimeout(() => {
  //     setQuery(value);
  //   }, TIME);
  // };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (inputVal.trim()) {
      setQuery(inputVal.trim())
    } 

  };
  const handleInputReset = () => {
    setInputVal('')
    
    navigate.reload()
    // clearTimeout(timer.current);
    // timer.current = setTimeout(() => {
    //   setIsFocused(false)
    // }, TIME);
  }

  console.log('IsFocused? ', isFocused);

  // useEffect (() => {

  //   targetRef.current.value =""
  // }, [showCloseBtn])
  
  return (
    <div className='relative'>
      <form onSubmit={handleSubmit}>
        <label className="button searchbutton" htmlFor="searchright">
          <span className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"><RiSearchLine className="w-5 h-5 text-cyan-400" /></span>
        </label>
        <input
          // className='h-10 pr-14 md:w-96 rounded-md p-4 text-md border border-cyan-400 bg-transparent text-cyan-400 focus:outline-none focus:border-2 focus:border-solid focus:border-cyan-300'
          className='flex h-10 pr-14 pl-10 text-sm text-cyan-400 bg-transparent rounded-md border border-cyan-400 focus:outline-none focus:border-1 focus:border-solid focus:border-cyan-300'
          type='text'
          placeholder='Search Movie'
          onFocus={() => setIsFocused(true)}
          // onBlur={() => setIsFocused(false)}
          // value={text}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.stopPropagation()}
          onKeyUp={(e) => e.stopPropagation()}
          onKeyPress={(e) => e.stopPropagation()}
          // onChange={handleInput}
          
        />

  {/* ${isFocused ? `visible` : `invisible`} */}
      </form>
      <button
        ref={buttonRef}
        onClick={handleInputReset}
        // onFocus={() => setIsFocused(true)}
        className={`flex absolute inset-y-0 right-0 items-center pr-3 text-cyan-400`}
      >
        x
      </button>
    </div>
  );
};

export default Search;

// ${isFocused ? `visible` : `invisible`}