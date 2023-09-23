import Link from 'next/link'
import styles from '../header.module.css'

export default function Footer() {

    return (
        <footer>
            <h1>from footer</h1>
            <div className="contenedor">
                <nav className={styles.navigation}>
                    <Link
                    href="/">  
                        Home           
                    </Link>
                    <Link href="/about"> 
                        About us
                    </Link>
                </nav>
            </div>
    </footer>
    )
}