import Image from "next/image"
import styles from '../photo.module.css'
import Link from 'next/link'



export default function Photo() {
    return (
      <header className={styles.image}>
          <div className={`contenedor ${styles.barra}`}>
              <Link legacyBehavior href="/">
                <a>
              <Image src="/photo2.webp" width={700  } height={300}  alt="image"/>
              </a>
              </Link>
          </div>
      </header>
    )
}