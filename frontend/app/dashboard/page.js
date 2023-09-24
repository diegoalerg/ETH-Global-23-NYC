"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import Head from 'next/head';

export default function DashboardPage() {
  const router = useRouter();
  const {
    ready,
    authenticated,
    user,
    logout,
  } = usePrivy();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/');
    }
  }, [ready, authenticated, router]);

  return (
    <>
      <main className="flex flex-col min-h-screen px-4 sm:px-20 py-6 sm:py-10 bg-privy-light-blue">
        {ready && authenticated ? (
          <>
            <div className="flex flex-row justify-between">
              <button
                onClick={logout}
                className="text-sm bg-violet-200 hover:text-violet-900 py-2 px-4 rounded-md text-violet-700"
              >
                Logout
              </button>
            </div>

            <div className="mt-6">
              <p className="font-bold text-sm text-gray-600">Nome do Usuário:</p>
              <p className="text-gray-600">{user?.google?.name || 'Nome não disponível'}</p>

              <p className="mt-4 font-bold text-sm text-gray-600">Wallet:</p>
              <p className="text-gray-600">{user?.wallet?.address || 'Wallet não disponível'}</p>
            </div>
          </>
        ) : null}
      </main>
    </>
  );
}
