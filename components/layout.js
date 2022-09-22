import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ active, children }) {
  return (
    <>
      <Head>
        <title>Gictsystems</title>
      </Head>
      <div class="flex flex-col h-screen">
          <Header active={active} />
          <main>
            {children}
          </main>
          <Footer />
      </div>
    </>
  )
}