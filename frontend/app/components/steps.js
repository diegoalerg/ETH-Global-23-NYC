import React from 'react';
//import styled from '@emotion/styled'
import styles from '../steps.module.css'


const Steps = () => {
    return ( 
        
        <div className={styles.container}>
             
             <h1 className={styles.action}>How to complete your journey?</h1>
          
             <ul className={styles.tilesWrap}>
            <li>
                <h2>01</h2>
                <h3>Get the FAN Token of your team</h3>
                <p className={styles.paragraph}>
                     There is no better way to support your team than getting its own FAN Token that will allow you to join then for the Final game!
                </p>
                <button>Read more</button>
            </li>
            <li>
                <h2>02</h2>
                <h3>Complete registration</h3>
                <p className={styles.paragraph}>
                Sign up with any of your social accounts ( Google , Apple and more!)
                </p>
                <button>Read more</button>
            </li>
            <li>
                <h2>03</h2>
                <h3>Be ready as soon as your team qualify to the Final</h3>
                <p className={styles.paragraph}>
                Imaging your Team qualifying to the final and you secured your spot for the best price of the market at that time!
                </p>
                <button>Read more</button>
            </li>
            </ul>
        </div>
     );
}
 
export default Steps;