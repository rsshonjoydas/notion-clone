'use client';

import { SignInButton, UserButton } from '@clerk/clerk-react';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';

import { Spinner } from '@/components/spinner';
import { useEffect, useState } from 'react';
import { Logo } from './logo';

export const Navbar = () => {
  const { isSignedIn } = useAuth();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isSignedIn !== undefined) {
      setIsLoaded(true);
    }
  }, [isSignedIn]);

  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        'fixed top-0 z-50 flex w-full items-center bg-background p-6 dark:bg-[#1F1F1F]',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className='flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end'>
        {isLoaded ? (
          isSignedIn ? (
            <>
              <Button size='sm' asChild>
                <Link href='/documents'>Enter Jotion</Link>
              </Button>
              <UserButton afterSignOutUrl='/' />
            </>
          ) : (
            <>
              <SignInButton mode='modal'>
                <Button size='sm'>Log in</Button>
              </SignInButton>
              <SignInButton mode='modal'>
                <Button size='sm'>Get Jotion free</Button>
              </SignInButton>
            </>
          )
        ) : (
          <Spinner />
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
