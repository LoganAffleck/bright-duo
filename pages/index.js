import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from './NavBar';
import What from './What';
import Who from './Who';
import GetStarted from './GetStarted';

export default function Home() {
  return (
    <div className='page'>
      <Head>
        <title>Bright Duo Studio</title>
        <meta name="description" content="A design and marketing company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavBar/>

      <main>

        <Image src='/../public/herologo.svg' height={300} width={400}
        className='heroLogo'/>

        <h1 className='heroText'>
          making <br/> brighter <br/> brands.
        </h1>

      </main>

      <What/>
      <Who/>
      <GetStarted/>

      <footer>
        <h2>Bright Duo Studio LLC</h2>
      </footer>
    </div>
  )
}
