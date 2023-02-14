import Head from 'next/head'
import Navigation from './Navigation/Navigation'

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"js_jedy, nextjs" + keywords}></meta>
        <title>Moe Next приложение</title>
      </Head>
      <>
      <Navigation />
      <div className='container'>
        <>
          {children}
        </>
      </div>
      </>
    </>
  )
}

export default MainContainer
