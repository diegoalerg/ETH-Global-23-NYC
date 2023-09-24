import Layout from '@/app/components/layout'
import styles from '../app/tokens.module.css'
import Image from "next/image"
import Link from 'next/link'

export default function Purchase() {
    return (
       <Layout
        title={'Nosotros'}
        description={'NFT to go events'}
       >

    <div className={styles.purchasecontainer} key="1">

            <p className={styles.description}>Description: Brasil finalist / Ticket+Hotels+Flight </p>
            <p className={styles.description}>Hotel: Hilton Hotel</p>
            <p className={styles.description}>Date: July 24, 2026</p>
            <p className={styles.precio}>Price: 100$</p>
            <p className={styles.precio}>Package: 5000$</p>
            <p><Image src="/card.png" width={150} height={200}  alt="image"/>  </p>

            <Link legacyBehavior href="/purchase"> 
            <a className={styles.button}>
                Buy FAN Token
            </a>
            </Link>
    </div>
    
        </Layout>
    )
  }