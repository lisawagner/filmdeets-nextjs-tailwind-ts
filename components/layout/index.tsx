
import NewHeader from "./NewHeader"

interface Props {
  children?: React.ReactNode
  // any props that come into the component
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <NewHeader setQuery={setQuery} />
      {children}
    </>
  )
}
export default Layout