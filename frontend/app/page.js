
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Layout from './components/layout'


export default function Home() {
  return (
   <>
  <Layout
    title={'Home'}
    description={'NFT to go events'}
  
  >  
      <h1>Home</h1>
     
  </Layout>
   </>
  )
}
