import Image from "next/image"
import Link from 'next/link'
import styles from '../tokens.module.css'



const ListTokens = [
    {
      id:1,
      description: 'Brasil finalist / Ticket+Hotels',
      hotel: 'Hilton Hotel',
      date: 'July 24, 2026',
      price: '100$',
      package: '5000$',
      image: <Image src="/card.png" width={140} height={140}  alt="image"/> 
  },{
      id:2,
      description: 'Brasil finalist / Ticket+Hotels',
      hotel: 'Hilton Hotel',
      date: 'July 24, 2026',
      price: '100$',
      package: '5000$',
      image: <Image src="/card.png" width={140} height={140}  alt="image"/> 
  },{
      id:3,
      description: 'Brasil finalist / Ticket+Hotels',
      hotel: 'Hilton Hotel',
      date: 'July 24, 2026',
      price: '100$',
      package: '5000$',
      image: <Image src="/card.png" width={140} height={140}  alt="image"/> 
  }
  ]

  const ArrayTokens = ListTokens.map((item) => (
    <div className={styles.token} key={item.id}>
    <p className={styles.description}>Description: {item.description}</p>
    <p className={styles.description}>Hotel: {item.hotel}</p>
    <p className={styles.description}>Date: {item.date}</p>
    <p className={styles.precio}>Price: {item.price}</p>
    <p className={styles.precio}>Package: {item.package}</p>
    <p>{item.image}</p>
    <Link legacyBehavior href="/purchase"> 
    <a className={styles.enlace}>
        See FAN Token
    </a>
    </Link>
    </div>
))

export default function Tokens() {

    console.log(ArrayTokens)

    return(  
      ArrayTokens       
    )
}