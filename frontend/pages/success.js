import Layout from '@/app/components/layout';
import styles from '../app/about.module.css';
import { useContractRead } from 'wagmi';
import FanTokenAbi from '../abi/FanToken.json';

export default function Success() {
  const fanTokenContractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

  const getTokens = useContractRead({
    address: fanTokenContractAddress,
    abi: FanTokenAbi,
    functionName: 'getTokensOfAddress',
    args: ['0x067e22C67Cb3AAdB82733983F3E6956FbB272f9A'],
    chainId: 84531,
  });
  console.log(getTokens.data);

  return (
    <Layout title={'Nosotros'} description={'NFT to go events'}>
      <h1>Contratulations, you just bought you FinalPass Token!</h1>
      <h2>OPPORTUNITY</h2>
      <p className={styles.paragraph}>
        The sports industry is vast, encompassing a far larger audience than the Web3 ecosystem.
        Moreover, sports fans are deeply passionate about their teams. With the right product
        experience, this passion can be leveraged for marketing. Creating a user-centered
        platform/product offering a seamless blockchain experience could not only be profitable but
        also introduce millions to the web3 community, further empowering it.
      </p>
      <h2>DESCRIPTION</h2>
      <p className={styles.paragraph}>
        The product is a call option for sports experiences. The holder purchases an NFT (the call
        option) granting them the right to buy an experience (like a ticket + hotel + flight) at a
        predetermined price (below market rate). NFTs sold for teams that don’t reach the final will
        finance the finalist’s subsidy and generate net revenue for the involved partners. An added
        revenue stream comes from the ability to sell the NFT (call option) on a secondary market as
        the competition progresses. Transactions in this secondary market will incur royalty fees.
      </p>
    </Layout>
  );
}
