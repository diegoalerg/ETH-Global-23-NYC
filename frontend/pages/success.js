import Layout from '@/app/components/layout';
import styles from '../app/about.module.css';
import { useContractRead } from 'wagmi';
import FanTokenAbi from '../abi/FanToken.json';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export default function Success() {
  const fanTokenContractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

  const getTokens = useContractRead({
    address: fanTokenContractAddress,
    abi: FanTokenAbi,
    functionName: 'getTokensOfAddress',
    args: ['0x067e22C67Cb3AAdB82733983F3E6956FbB272f9A'],
    chainId: 84531,
  });

  const [balance, setBalance] = useState('Loading data...');

  const bigNumToString = value => {
    const bigNumberValue = ethers.getBigInt(value);

    return bigNumberValue.toString();
  };

  useEffect(() => {
    if (getTokens.data && getTokens.data[0]) {
      setBalance(bigNumToString(getTokens.data[0][0]));
    }
  }, [getTokens.data]);

  return (
    <Layout title={'Nosotros'} description={'NFT to go events'}>
      <h1>Contratulations, you just bought you FinalPass Token!</h1>
      <div>
        <h2>Your number of tokens is:</h2>
        {getTokens.data ? <h2>{balance}</h2> : <h2>Loading data...</h2>}
        </div>
    </Layout>
  );
}
