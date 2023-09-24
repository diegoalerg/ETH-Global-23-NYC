import Layout from '@/app/components/layout';
import { GateFiDisplayModeEnum, GateFiSDK } from '@gatefi/js-sdk';
import { useRef, useEffect, useState } from 'react';
import crypto from 'crypto-browserify';

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
      //   overlayInstanceSDK.current = new GateFiSDK({
      //     merchantId: 'f1cdf084-856e-4d74-b2f4-62e2d6e83751',
      //     displayMode: GateFiDisplayModeEnum.Overlay,
      //     nodeSelector: '#overlay-button',
      //     isSandbox: true,
      //     hideAsset: true,
      //     fiatAmountLock: true,
      //     walletLock: true,
      //     cryptoCurrencyLock: true,
      //     walletAddress: '0xC0aCe742912Fc6c8aA1ce4bB73676d619EBdBb54',
      //     email: 'pedrorfcunha@outlook.com',
      //     externalId: 'randomString',
      //     availableCrypto: ['ETH'],
      //     defaultFiat: {
      //       currency: 'USD',
      //       amount: '100',
      //     },
      //     defaultCrypto: {
      //       currency: 'ETH',
      //     },
      //   });
      // }
      // overlayInstanceSDK.current?.show();
      // setIsOverlayVisible(true);

      const randomString = crypto.randomBytes(32).toString('hex');
      overlayInstanceSDK.current = new GateFiSDK({
        merchantId: '9e34f479-b43a-4372-8bdf-90689e16cd5b',
        displayMode: GateFiDisplayModeEnum.Overlay,
        nodeSelector: '#overlay-button',
        isSandbox: true,
        hideAsset: true,
        walletAddress: 'mxPVeWZjQir7mNzvAHbFNDibpY2pfx6qjY',
        externalId: randomString,
        successUrl: "http://google.com",
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
      <h1>Purchase</h1>
      <button onClick={handleOnClick}>Buy</button>
      <div id="overlay-button"></div>
    </Layout>
  );
}
