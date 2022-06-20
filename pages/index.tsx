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

const social = [
  { title: 'Linkedin', icon: 'akar-icons:linkedin-v1-fill' },
  { title: 'Discord', icon: 'akar-icons:discord-fill' },
  { title: 'Twitter', icon: 'akar-icons:twitter-fill' },
  { title: 'Instagram', icon: 'akar-icons:instagram-fill' },
];

const nav = ['Projects', 'About', 'Page'];

const Home: NextPage = () => {
  return (
    <div className='font-inter'>
      <header className='sticky -top-7 sm:-top-10 z-10 mx-auto w-[90%] pt-7 sm:pt-8'>
        <div className='sticky top-4 flex items-center justify-between bg-white py-3 sm:py-5 duration-1000'>
          <div className='relative flex gap-2'>
            <span className='text-xl font-black sm:text-2xl'>LYNE</span>
            <div className='relative w-[30px] sm:w-[37px]'>
              <Image layout='fill' src='/torii.svg' alt='torii logo' />
            </div>
          </div>
          <nav className='group'>
            <button>
              <Icon className='text-3xl sm:text-4xl' icon='heroicons-outline:menu-alt-1' />
            </button>
            <ul className='fixed right-0 top-0 -z-10 h-screen w-full -translate-x-full bg-white pt-28 text-center shadow-md duration-300 group-focus-within:translate-x-0'>
              {nav.map((item) => (
                <li
                  key={item}
                  className='after:contents-[""] relative cursor-pointer px-[5vw] py-4 text-3xl tracking-wide after:absolute after:left-0 after:top-0
                  after:-z-10 after:h-full after:w-full after:origin-left after:scale-x-0 after:bg-slate-300 after:duration-300 hover:after:scale-x-100'
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className='mx-auto w-[90%]'>
        <section className='grid h-[calc(100vh-5rem)] place-items-center'>
          <div className='-mt-[7vh]'>
            <p className='pl-[2px] text-lg  font-medium sm:text-xl'>
              Hi I am <span className='text-showy-violet'>Zayar Lynn</span>
            </p>
            <h1 className='mt-3 text-3xl font-black leading-10 tracking-wide sm:mt-4 sm:text-4xl'>
              Self-driven developer who loves to explore new technologies
            </h1>
            <div className='mt-14 flex items-center gap-[10vw] sm:mt-16 sm:gap-[15vw]'>
              <button className='rounded-md border-2 border-showy-violet px-10 py-1 tracking-wide duration-200 hover:bg-showy-violet hover:text-white active:opacity-80 sm:px-12 sm:py-[6px] sm:text-xl'>
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
          <ul className='mt-20 sm:mt-28 sm:mx-auto sm:max-w-[28rem]'>
            {projects.map(({ title, thumb, techstack }) => (
              <li key={title} className='mb-8 sm:mb-12 rounded-md bg-gray-300 px-5 py-8 sm:px-7 sm:py-9'>
                <div className='group relative aspect-square w-full cursor-pointer bg-[#0749bd10] opacity-90 backdrop-blur-lg'>
                  <Image
                    className='duration-500 group-hover:scale-[80%]'
                    src={thumb}
                    alt={title}
                    layout='fill'
                  />
                </div>
                <h3 className='mt-6 sm:text-3xl text-2xl'>{title}</h3>
                <div className='mt-4 flex gap-2 sm:mt-7 sm:gap-3 text-sm text-white'>
                  {techstack.map((item) => (
                    <div
                      className='rounded-[4px] bg-showy-violet px-4 sm:px-5 sm:py-[5px] py-1 text-[16px] font-normal tracking-wide'
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className='flex-x mt-7 sm:mt-12'>
                  <button className='rounded-[5px] border-2 border-showy-violet px-7 sm:px-9 sm:text-xl sm:py-1 py-[3px] tracking-wide duration-300 hover:bg-showy-violet hover:text-white active:opacity-70'>
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
        <section className='sm:max-w-[28rem] sm:mx-auto mt-20 grid min-h-screen place-items-center pt-20 text-center'>
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
              title='oyasumi punpun'
            />
          </div>
        </section>
      </main>
      <footer className='bg-gray-200 py-8'>
        <div className='mx-auto w-[90%]'>
          <div className='relative flex gap-4'>
            <span className='text-3xl font-black'>LYNE</span>
            <div className='relative w-[40px]'>
              <Image layout='fill' src='/torii.svg' alt='torii logo' />
            </div>
          </div>
          <ul className='mt-12 mb-8 flex justify-center gap-[min(3rem,7vw)]'>
            {social.map(({ title, icon }) => (
              <li key={title}>
                <a href='' target='_blank' title={title}>
                  <Icon className='text-3xl duration-200 hover:text-showy-violet' icon={icon} />
                </a>
              </li>
            ))}
          </ul>
          <span className='block text-center text-lg'>zayar.lynn.dev@gmail.com</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
