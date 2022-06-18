import type { NextPage } from 'next';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import SeeMoreBtn from '../components/SeeMoreBtn';

const projects = [
  {
    title: 'Fullstack e-commerce web app',
    thumb: '/assets/thumb-1.jpg',
    techstack: ['nextjs', 'django', 'mysql'],
  },
  {
    title: 'POS tea shop website',
    thumb: '/assets/thumb-2.jpg',
    techstack: ['nextjs', 'django', 'mysql'],
  },
];

const Home: NextPage = () => {
  return (
    <div className='mx-auto w-[90%] font-inter'>
      <header className='sticky -top-7 z-10 pt-7'>
        <div className='sticky top-4 flex items-center justify-between bg-white py-3 duration-1000'>
          <div className='relative flex gap-2'>
            <span className='text-xl font-black'>LYNE</span>
            <div className='relative w-[30px]'>
              <Image layout='fill' src='/torii.svg' alt='torii logo' />
            </div>
          </div>
          <nav>
            <Icon className='cursor-pointer text-3xl' icon='heroicons-outline:menu-alt-1' />
          </nav>
        </div>
      </header>
      <main>
        <section className='grid h-[calc(100vh-5rem)] place-items-center'>
          <div className='-mt-[7vh]'>
            <p className='pl-[2px] text-lg font-medium'>
              Hi I am <span className='text-showy-violet'>Zayar Lynn</span>
            </p>
            <h1 className='mt-3 text-3xl font-black leading-10 tracking-wide'>
              Self-driven developer who loves to explore new technologies
            </h1>
            <div className='mt-14 flex items-center gap-[10vw]'>
              <button className='rounded-md border-2 border-showy-violet px-10 py-1 tracking-wide duration-200 hover:bg-showy-violet hover:text-white active:opacity-80'>
                Blogs
              </button>
              <SeeMoreBtn>view projects</SeeMoreBtn>
            </div>
          </div>
        </section>
        <section className='mt-2'>
          <div className='relative'>
            <hr className='border-[#00000070]' />
            <h2 className='absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 bg-white px-5 text-3xl font-medium tracking-wide'>
              Projects
            </h2>
          </div>
          <ul className='mt-20'>
            {projects.map(({ title, thumb, techstack }) => (
              <li key={title} className='mb-8 rounded-md bg-gray-300 px-5 py-8'>
                <div className='group relative aspect-square w-full cursor-pointer bg-[#0749bd10] opacity-90 backdrop-blur-lg'>
                  <Image
                    className='duration-500 group-hover:scale-[80%]'
                    src={thumb}
                    alt={title}
                    layout='fill'
                  />
                </div>
                <h3 className='mt-6 text-2xl'>{title}</h3>
                <div className='mt-4 flex gap-2 text-sm text-white'>
                  {techstack.map((item) => (
                    <div
                      className='rounded-[4px] bg-showy-violet px-4 py-1 text-[16px] font-normal tracking-wide'
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className='flex-x mt-7'>
                  <button className='rounded-[5px] border-2 border-showy-violet px-7 py-[3px] tracking-wide duration-300 hover:bg-showy-violet hover:text-white active:opacity-70'>
                    preview
                  </button>
                  <button>
                    <Icon className='text-4xl' icon='ant-design:github-outlined' />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className='mt-20 grid min-h-screen place-items-center pt-20 text-center'>
          <h2 className='text-3xl font-semibold tracking-wide'>Who I am?</h2>
          <p className='my-5 px-2 text-lg'>
            I am an undergraduate who focus in Computer Science. I have a great interest in Math and
            Programming.
          </p>
          <SeeMoreBtn>more details</SeeMoreBtn>
          <div className='relative h-[calc(100vw+5rem)] w-full'>
            <Image
              className='w-full scale-110 object-contain outline'
              src='/assets/punpun.png'
              alt='oyasumi punpun'
              layout='fill'
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
