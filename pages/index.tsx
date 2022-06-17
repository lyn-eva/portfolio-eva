import type { NextPage } from 'next';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Home: NextPage = () => {
  return (
    <div className='font-inter mx-auto w-[90%]'>
      <header className='py-7 flex items-center justify-between fixed w-[90%] left-[5%] bg-white'>
        <div className='relative flex gap-2 bg-white'>
          <span className='font-black text-xl'>LYNE</span>
          <div className='relative w-[30px]'>
            <Image layout='fill' src='/torii.svg' alt='torii logo' />
          </div>
        </div>
        <nav>
          <Icon className='text-3xl' icon='heroicons-outline:menu-alt-1' />
        </nav>
      </header>
      <main>
        <section className='h-screen grid place-items-center'>
          <div>
            <p className='font-medium text-lg pl-[2px]'>
              Hi I am <span className='text-showy-violet'>Zayar Lynn</span>
            </p>
            <h1 className='text-3xl mt-3 font-black tracking-wide leading-10'>
              Self-driven developer who loves to explore new technologies
            </h1>
            <div className='flex items-center gap-[10vw] mt-14'>
              <button className='border-showy-violet tracking-wide border-2 px-10 py-1 rounded-md hover:text-white hover:bg-showy-violet duration-200 active:opacity-80'>
                Blogs
              </button>
              <button className='flex items-center gap-1 tracking-wide group'>
                <span className='border-darken-green border-b-[1px] group-hover:border-showy-violet leading-5 '>
                  view projects
                </span>
                <Icon
                  className='text-xl group-hover:translate-x-2 mt-[2px] duration-300'
                  icon='bi:arrow-right'
                />
              </button>
            </div>
          </div>
        </section>
        <section>
          projects ofc
        </section>
      </main>
    </div>
  );
};

export default Home;
