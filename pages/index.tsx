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
      <header className='sticky -top-7 z-10 mx-auto w-[90%] pt-7 sm:-top-10 sm:pt-8 lg:-top-5 lg:pt-0'>
        <div className='sticky top-4 flex items-center justify-between bg-white py-3 duration-1000 sm:py-5 lg:pt-8 lg:pb-5'>
          <div className='relative flex gap-2'>
            <span className='text-xl font-black sm:text-2xl'>LYNE</span>
            <div className='relative w-[30px] sm:w-[37px]'>
              <Image layout='fill' src='/torii.svg' alt='torii logo' />
            </div>
          </div>
          <nav className='group lg:grid'>
            <button>
              <Icon
                className='text-3xl sm:text-4xl lg:hidden'
                icon='heroicons-outline:menu-alt-1'
              />
            </button>
            <ul className='fixed right-0 top-0 -z-10 h-screen w-full -translate-x-full bg-white pt-28 text-center shadow duration-300 group-focus-within:translate-x-0 lg:static lg:flex lg:h-auto lg:translate-x-0 lg:gap-20 lg:pt-0 lg:shadow-none'>
              {nav.map((item) => (
                <li
                  key={item}
                  className='after:contents-[""] relative cursor-pointer px-[5vw] py-4 text-3xl tracking-wide after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:origin-left
                  after:scale-x-0 after:bg-slate-300 after:duration-300 hover:after:scale-x-100 lg:py-0 lg:px-0 lg:text-xl lg:after:hidden'
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className='mx-auto w-[90%]'>
        <section className='relative grid h-[calc(100vh-84px)] place-items-center lg:justify-start'>
          <div className='-mt-[7vh]'>
            <p className='pl-[2px] text-lg  font-medium sm:text-xl'>
              Hi I am <span className='text-showy-violet'>Zayar Lynn</span>
            </p>
            <h1 className='mt-3 bg-white text-3xl font-black leading-10 tracking-wide sm:mt-4 sm:text-4xl lg:mt-5 lg:text-[2.5rem] lg:leading-[1.4]'>
              Self-driven developer who loves <br className='lg:block' /> to explore new
              technologies
            </h1>
            <div className='mt-14 flex items-center gap-[10vw] sm:mt-16 sm:gap-[15vw] lg:mt-24 lg:gap-28'>
              <button className='rounded-md border-2 border-showy-violet px-10 py-1 tracking-wide duration-200 hover:bg-showy-violet hover:text-white active:opacity-80 sm:px-12 sm:py-[6px] sm:text-xl'>
                Blogs
              </button>
              <SeeMoreBtn>view projects</SeeMoreBtn>
            </div>
          </div>
          <div className='absolute top-0 left-0 -z-20 hidden h-full w-full lg:block'>
            <svg
              className='ml-auto h-full opacity-40'
              viewBox='0 0 1567 969'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M969 599.5H1565' stroke='black' strokeWidth='4' />
              <path
                d='M2.29206 966.5C-1.04127 881.833 22.7921 662.2 144.792 461C266.792 259.8 468.959 133.5 554.792 95.5L649.5 59L722.292 34.5L783.5 19.5L843.292 11.5L891.292 5L926.792 2H969.792L1005.5 3.5L1069.5 10.5L1106.29 18L1136.29 26L1163.79 34L1188.79 43.5L1207.79 52L1224.79 59.5L1238.79 66.5L1263.29 79.5L1285.29 92.5L1303.79 105L1322.29 118.5L1336.79 129L1351.79 141.5L1368.79 156.5L1385.79 172L1395.29 181L1405.29 192L1413.29 201.5L1425.29 214.5L1440.79 233.5L1457.29 256L1468.29 273L1478.79 290L1491.29 311.5L1504.29 335.5L1515.29 359.5L1523.79 380L1530.29 399L1537.29 419L1543.79 441.5L1550.29 467C1551.46 473.167 1553.89 486 1554.29 488C1554.69 490 1557.79 508.5 1559.29 517.5L1562.79 549L1563.79 569.5L1564.79 599L1563.79 629.5L1559.79 659L1551.29 698.5L1535.29 743L1523.79 767L1512.79 787.5L1499.79 807L1487.79 823.5L1470.79 844L1453.79 862L1438.29 876L1424.79 887.5L1409.79 899L1368.79 924.5L1338.29 939L1306.29 950L1278.79 957.5L1262.29 961L1235.79 965L1207.29 967H1190.29L1168.79 965L1145.79 961L1122.29 955L1099.29 945.5L1070.29 929L1055.29 917.5L1036.79 901L1023.79 886.5L1008.29 866L994.292 842L983.792 818L977.292 795L972.292 774L969.292 756.5V739V726.5L971.5 715.5L975.292 702.5L981.292 685L989.792 669L997.792 657.5L1006.29 646L1017.29 635.5L1031.29 625L1048.79 615L1064.29 608.5L1079.29 605L1095.79 602L1109.29 601.5L1120.29 602L1133.79 605L1144.79 609L1156.29 615L1169.79 626.5L1180.29 638.5L1186.79 650.5L1190.79 659.5L1193.79 669L1196 677.5L1197 687L1195 697L1190.79 710L1184.29 720L1177.29 727.5L1169.29 733L1160.79 737L1152 740L1143 741L1135.5 740L1127.29 735.5L1119.5 728.5L1114.79 721.5L1111.79 715.5L1110 707.5L1111.79 701.5L1116 695L1119.29 692L1124.79 689L1128.5 687H1130.5L1132.5 687.5L1136.29 689.5L1139.29 692L1141 694.5L1143 698.5V700.5L1140 704L1137.79 706H1134.79M1134.79 706H1133.29L1131.29 704V702.5L1133.29 700.5H1134.79V706Z'
                stroke='black'
                strokeWidth='4'
              />
              <path d='M969 3V968.753' stroke='black' strokeWidth='4' />
              <path d='M1197 600V967' stroke='black' strokeWidth='4' />
              <path d='M1197 741H969' stroke='black' strokeWidth='4' />
              <path d='M1110 741V600' stroke='black' strokeWidth='4' />
              <path d='M1110 687H1197' stroke='black' strokeWidth='4' />
              <path d='M1143 687V741' stroke='black' strokeWidth='4' />
              <path d='M1143 707H1110' stroke='black' strokeWidth='4' />
              <path d='M1130 707L1130 687' stroke='black' strokeWidth='4' />
              <path d='M1130.5 699.5H1143' stroke='black' strokeWidth='4' />
              <path d='M1135.5 699.5V707' stroke='black' strokeWidth='4' />
            </svg>
          </div>
        </section>
        <section className='mt-28'>
          <div className='relative'>
            <hr className='border-[#00000070]' />
            <h2 className='absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 bg-white px-5 text-3xl font-medium tracking-wide'>
              Projects
            </h2>
          </div>
          <ul className='mx-auto mt-20 max-w-[28rem] grid-cols-2 sm:mt-28 lg:grid lg:max-w-none lg:gap-[10vw]'>
            {projects.map(({ title, thumb, techstack }) => (
              <li
                key={title}
                className='mb-8 rounded-md bg-gray-300 px-5 py-8 sm:mb-12 sm:px-7 sm:py-9'
              >
                <div className='group relative aspect-square w-full cursor-pointer bg-[#0749bd10] opacity-90 backdrop-blur-lg'>
                  <Image
                    className='duration-500 group-hover:scale-[80%]'
                    src={thumb}
                    alt={title}
                    layout='fill'
                  />
                </div>
                <h3 className='mt-6 text-2xl sm:text-3xl'>{title}</h3>
                <div className='mt-4 flex gap-2 text-sm text-white sm:mt-7 sm:gap-3'>
                  {techstack.map((item) => (
                    <div
                      className='rounded-[4px] bg-showy-violet px-4 py-1 text-[16px] font-normal tracking-wide sm:px-5 sm:py-[5px]'
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className='flex-x mt-7 sm:mt-12'>
                  <button className='rounded-[5px] border-2 border-showy-violet px-7 py-[3px] tracking-wide duration-300 hover:bg-showy-violet hover:text-white active:opacity-70 sm:px-9 sm:py-1 sm:text-xl'>
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
        <section className='mx-auto mt-20 grid min-h-screen max-w-md place-items-center items-center pt-20 text-center lg:flex lg:max-w-none lg:flex-row-reverse lg:gap-[15vw]'>
          <div className='lg:flex lg:w-full lg:flex-col lg:items-center'>
            <h2 className='text-3xl lg:text-4xl font-semibold tracking-wide'>Who I am?</h2>
            <p className='my-5 lg:leading-8 lg:text-xl lg:my-8 px-2 text-lg'>
              I am an undergraduate who focus in Computer Science. I have a great interest in Math
              and Programming.
            </p>
            <SeeMoreBtn>more details</SeeMoreBtn>
          </div>
          <div className='relative mb-16 mt-[5vw] aspect-square w-full lg:mt-0'>
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
