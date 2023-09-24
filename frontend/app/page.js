
"use client"
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import Layout from './components/layout';
import {usePrivy} from '@privy-io/react-auth';


import Steps from './components/steps';
import Photo from './components/photo';
import Tokens from './components/tokens';

export default function Home() {
  const {login} = usePrivy();

  return (
    <>
      <Layout title={'Home'} description={'NFT to go events'}>
        <Photo />

        <Steps />
        <button
      className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
      onClick={login}
         >
      Log in
      </button>

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
