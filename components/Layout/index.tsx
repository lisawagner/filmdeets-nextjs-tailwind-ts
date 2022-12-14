import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: React.ReactNode
  // any props that come into the component
}

const Layout = ({ children, ...props }: Props) => {

  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}
export default Layout