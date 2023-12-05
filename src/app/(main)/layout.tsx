'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

import { Navigation } from './_components/navigation';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  if (!isSignedIn) {
    return router.push('/');
  }

  return (
    <div className='flex h-full dark:bg-[#1F1F1F]'>
      <Navigation />
      <main className='h-full flex-1 overflow-y-auto'>{children}</main>
    </div>
  );
};

export default MainLayout;
