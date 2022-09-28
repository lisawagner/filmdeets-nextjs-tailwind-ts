import Header from './Header'

type Props = {
  children?: React.ReactNode
  // any props that come into the component
}

const Layout = ({ children, ...props }: Props) => {

  return (
    <>
      <Header />
      {children}
    </>
  )
}
export default Layout