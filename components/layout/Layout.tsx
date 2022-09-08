import Head from "next/head"
import Header from "./Header"

type Props = {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>MovieDeets</title>
        <meta name="description" content="MovieDeets, an app search movie info and to look up new movies to watch. Made with Nextjs, Tailwind, Typescript and The Movie Database API." />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}