
"use client"
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Layout from './components/layout';



import Steps from './components/steps';
import Photo from './components/photo';
import Tokens from './components/tokens';
//import { useAccount } from 'wagmi';



export default function Home() {
  
  //const { isConnected } = useAccount()

  //console.log(isConnected)
  return (
    <>
      <Layout title={'Home'} description={'NFT to go events'}>
        <Photo />

        <Steps />
  
        <div className={styles.collection}>
          <div className={styles.eleven}>
            <h1 className={styles.title}>Choose your FAN Token</h1>
          </div>

          <div className={styles.grid}>
            <Tokens />
          </div>
        </div>
      </Layout>
    </>
  );
}
