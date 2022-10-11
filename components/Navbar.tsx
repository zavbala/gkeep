import { APP_NAME } from 'lib/constant';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from './Button';

const classes = 'text-xl capitalize text-shuttle-gray dark:text-mercury';

const Navbar = () => {
  const { pathname } = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDarkMode = theme === 'dark' ? true : false;

  return (
    <nav className='sticky top-0 z-40 flex h-[10vh] items-center justify-between border-b border-iron bg-white px-5 dark:border-shuttle-gray dark:bg-shark'>
      <div className='flex w-full items-center lg:w-1/6'>
        {pathname === '/' || pathname.includes('NOTE') ? (
          <Logo />
        ) : (
          <h2 className={classes}> {pathname.split('/')[1]} </h2>
        )}
      </div>

      <div className='hidden w-7/12 items-center rounded-lg bg-porcelain p-1 transition-all duration-200 focus-within:bg-white focus-within:shadow dark:bg-abbey lg:flex'>
        <Button icon='search' />
        <input type='search' className='h-full w-full' placeholder='Search' />
      </div>

      <div className='flex items-center gap-x-2'>
        <Button
          icon={isDarkMode ? 'dark_mode' : 'light_mode'}
          title={`${isDarkMode ? 'Disable' : 'Enable'} Dark Mode`}
          onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
        />
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/zavbala/keppy'
        >
          GITHUB
        </a>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className='flex items-center gap-x-2'>
      <Image
        alt='Logo'
        width={35}
        height={35}
        src='https://cdn.svgporn.com/logos/google-keep.svg'
      />
      <h2 className={classes}> {APP_NAME} </h2>
    </div>
  );
};

export default Navbar;
