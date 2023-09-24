import Layout from '@/app/components/layout';
import { GateFiDisplayModeEnum, GateFiSDK } from '@gatefi/js-sdk';
import { useRef, useEffect, useState } from 'react';
import crypto from 'crypto-browserify';
import styles from '../app/tokens.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Purchase() {
  const overlayInstanceSDK = useRef(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    return () => {
      overlayInstanceSDK.current?.destroy();
      overlayInstanceSDK.current = null;
    };
  }, []);

  const handleOnClick = () => {
    if (overlayInstanceSDK.current) {
      if (isOverlayVisible) {
        overlayInstanceSDK.current.hide();
        setIsOverlayVisible(false);
      } else {
        overlayInstanceSDK.current.show();
        setIsOverlayVisible(true);
      }
    } else {
      const randomString = crypto.randomBytes(32).toString('hex');
      overlayInstanceSDK.current = new GateFiSDK({
        merchantId: '9e34f479-b43a-4372-8bdf-90689e16cd5b',
        displayMode: GateFiDisplayModeEnum.Overlay,
        nodeSelector: '#overlay-button',
        isSandbox: true,
        hideAsset: true,
        walletAddress: 'mxPVeWZjQir7mNzvAHbFNDibpY2pfx6qjY',
        externalId: randomString,
        successUrl: 'http://localhost:3000/success',
        defaultFiat: {
          currency: 'USD',
          amount: '100',
        },
        defaultCrypto: {
          currency: 'BTC',
        },
      });
    }
    overlayInstanceSDK.current?.show();
    setIsOverlayVisible(true);
  };

  return (
    <Layout title={'Nosotros'} description={'NFT to go events'}>
      <div className={styles.purchasecontainer} key="1">
        <p className={styles.description}>Description: Brasil finalist / Ticket+Hotels+Flight </p>
        <p className={styles.description}>Hotel: Hilton Hotel</p>
        <p className={styles.description}>Date: July 24, 2026</p>
        <p className={styles.precio}>Price: 100$</p>
        <p className={styles.precio}>Package: 5000$</p>
        <p>
          <Image src="/card.png" width={150} height={200} alt="image" />{' '}
        </p>

        <Link legacyBehavior href="/purchase">
          <a className={styles.button} onClick={handleOnClick}>
            Buy FAN Token
          </a>
        </Link>
      </div>
      <div id="overlay-button"></div>
    </Layout>
  );
}
