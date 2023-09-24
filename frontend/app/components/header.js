import Image from "next/image"
import Link from 'next/link'
import styles from '../header.module.css'


export default function Header() {
    return (
      <header className={styles.header}>
          <div className={`contenedor ${styles.barra}`}>
              <Link legacyBehavior href="/">
                <a>
              <Image src="/stadium.jpg" width={700  } height={150}  alt="image"/>
              </a>
              </Link>

              <nav className={styles.navigation}>
                  <Link legacyBehavior 
                  href="/"> 
                    <a className={styles.enlace}>
                      Home
                    </a>
                  </Link>
                  <Link href="/about"> 
                      About us
                  </Link>
              </nav>
          </div>
      </header>
    )
}