"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import {PrivyProvider} from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] })


// export const metadata = {
//   title: 'Home',
//   description: 'NFT to go events',
// }

export default function RootLayout({ children }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body className={inter.className}>
      
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
        config={{
          embeddedWallets: {
              createOnLogin: 'users-without-wallets'
          },        
          
      }}
        onSuccess={() => router.push('/dashboard')}
      >
        {children}
      </PrivyProvider>
      
      
      </body>
    
    </html>
  )
}
