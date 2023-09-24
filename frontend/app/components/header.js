import Image from "next/image"
import Link from 'next/link'
import styles from '../header.module.css'
import {usePrivy} from '@privy-io/react-auth';


export default function Header() {
  const {login} = usePrivy();
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
                  <button
                    className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
                    onClick={login}
                 >
                    Log in
                    </button>
              </nav>
          </div>
      </header>
    )
}