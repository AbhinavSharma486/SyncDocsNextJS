import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/' className='md:flex-1'>
        <Image
          src="/images/newbrandnamewithlogo.png"
          alt='Logo with name'
          width={240}
          height={1}
          className='hidden md:block'
        />

        <Image
          src="/images/tablogo.png"
          alt='Logo'
          width={60}
          height={32}
          className='mr-2 md:hidden'
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;