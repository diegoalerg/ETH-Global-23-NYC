import { WagmiConfig, createConfig, configureChains, mainnet, sepolia } from 'wagmi';
import { baseGoerli } from 'viem/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia, baseGoerli],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: false,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default MyApp;
