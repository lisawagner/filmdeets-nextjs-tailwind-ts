
type ResetProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>

}

const SearchReset = ({ onClick }: ResetProps) => {

  return (
    <>
      <button
        onClick={onClick}
        className={`flex absolute inset-y-0 right-0 items-center pr-3 text-cyan-400`}
      >X</button>
    </>
  )
}
export default SearchReset