
type ResetProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  inputVal: string
  setInputVal: () => void
}

const SearchReset = ({ onClick, inputVal, setInputVal }: ResetProps) => {

  return (
    <>
    <button
    onClick={() => setInputVal()}
    className={`flex absolute inset-y-0 right-0 items-center pr-3 text-cyan-400`}
  >
    x
  </button>
  </>
  )
}
export default SearchReset