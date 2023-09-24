import Link from 'next/link'
import styles from '../footer.module.css'

export default function Footer() {

    return (
        <footer className={styles.footer}>

            <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navigation}>
                <Link
                href="/">        
                    Home
                </Link>
                <Link href="/about"> 
                    About us
                </Link>
            </nav>
            <p className={styles.copyright} >Copyright ETH Global NYC { new Date().getFullYear() } </p>
            </div>
    </footer>
    )
}