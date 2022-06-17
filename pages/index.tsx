import type { NextPage } from 'next';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Home: NextPage = () => {
  return (
    <div className='mx-auto w-[90%] flex flex-col min-h-screen'>
      <header className='py-5 flex items-center justify-between'>
        <div className='relative flex gap-2 bg-white'>
          <span className='font-extrabold text-xl'>LYNE</span>
          <div className='relative w-[30px]'>
            <Image layout='fill' src='/torii.svg' alt='torii logo' />
          </div>
        </div>
        <nav>
          <Icon className='text-[26px]' icon='heroicons-outline:menu-alt-1' />
        </nav>
      </header>
      <main className='grow flex items-center'>
        <div className='-mt-[20vh]'>
          <p className='font-medium pl-[2px]'>
            Hi I am <span className='text-showy-violet'>Zayar Lynn</span>
          </p>
          <h1 className='text-[25px] mt-3 font-black tracking-wide'>
            Self-driven developer who loves to explore new technologies
          </h1>
          <div className='flex items-center gap-[10vw] mt-8'>
            <button className='border-showy-violet tracking-wide border-2 px-8 py-1 rounded-md hover:text-white hover:bg-showy-violet duration-200 active:bg-white active:text-darken-green'>
              Blogs
            </button>
            <button className='flex items-center gap-1 tracking-wide group'>
              <span className='border-darken-green border-b-[1px] group-hover:border-b-2 group-hover:border-showy-violet leading-5'>
                view projects
              </span>
              <Icon
                className='text-xl group-hover:translate-x-2 duration-300'
                icon='bi:arrow-right'
              />
            </button>
          </div>
        </div>
      <div className='absolute w-full left-0 -z-10'>
        <svg
          viewBox='0 0 320 504'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.25'>
            <path d='M122.325 311.341L122.325 502' stroke='black' strokeWidth='3' />
            <path
              d='M0.746355 2.09343C28.7944 1.0271 101.554 8.65133 168.206 47.6789C234.859 86.7064 276.699 151.379 289.288 178.837L301.379 209.134L309.496 232.42L314.465 252L317.115 271.127L319.268 286.482L320.262 297.839V311.594L319.765 323.017L317.446 343.491L314.962 355.261L312.311 364.857L309.661 373.655L306.514 381.652L303.698 387.73L301.214 393.168L298.895 397.647L294.588 405.484L290.282 412.522L286.141 418.44L281.668 424.358L278.19 428.997L274.049 433.795L269.08 439.234L263.945 444.672L260.964 447.711L257.32 450.91L254.173 453.469L249.866 457.308L243.572 462.266L236.118 467.545L230.486 471.063L224.855 474.422L217.732 478.421L209.782 482.58L201.831 486.099L195.04 488.818L188.746 490.897L182.12 493.136L174.666 495.216L166.219 497.295C164.176 497.668 159.924 498.447 159.262 498.575C158.599 498.703 152.471 499.694 149.489 500.174L139.054 501.294L132.263 501.614L122.49 501.934L112.386 501.614L102.614 500.334L89.5283 497.615L74.7865 492.497L66.8359 488.818L60.0448 485.299L53.5849 481.14L48.1188 477.302L41.3277 471.863L35.3647 466.425L30.7268 461.467L26.9172 457.148L23.1075 452.349L14.6599 439.234L9.85645 429.477L6.21241 419.24L3.72784 410.443L2.56837 405.165L1.24327 396.687L0.580717 387.57V382.132L1.24327 375.254L2.56837 367.896L4.55603 360.379L7.70315 353.021L13.1692 343.744L16.9789 338.946L22.4449 333.028L27.2484 328.869L34.0396 323.911L41.9902 319.432L49.9408 316.073L57.5602 313.994L64.517 312.394L70.3143 311.435H76.1117H80.2526L83.8966 312.141L88.2032 313.354L94.0006 315.273L99.301 317.992L103.111 320.552L106.92 323.271L110.399 326.79L113.877 331.268L117.19 336.866L119.343 341.825L120.503 346.623L121.496 351.902L121.662 356.22L121.496 359.739L120.503 364.058L119.178 367.577L117.19 371.255L113.38 375.574L109.405 378.933L105.43 381.012L102.448 382.292L99.301 383.252L96.4851 383.958L93.338 384.278L90.0252 383.638L85.7187 382.292L82.4059 380.213L79.9213 377.973L78.0993 375.414L76.7742 372.695L75.7804 369.882L75.4491 367.003L75.7804 364.604L77.2711 361.978L79.59 359.486L81.909 357.98L83.8966 357.02L86.5468 356.447L88.5345 357.02L90.6878 358.366L91.6816 359.419L92.6755 361.179L93.338 362.365V363.005L93.1724 363.644L92.5098 364.857L91.6816 365.817L90.8534 366.364L89.5283 367.003H88.8658L87.7063 366.044L87.0438 365.337V364.378M87.0438 364.378V363.898L87.7063 363.258H88.2032L88.8658 363.898V364.378H87.0438Z'
              stroke='black'
              strokeWidth='3'
            />
            <path d='M319.931 311.341H-9.74562e-06' stroke='black' strokeWidth='3' />
            <path d='M122.159 384.278H0.580765' stroke='black' strokeWidth='3' />
            <path d='M75.4491 384.278L75.4491 311.341' stroke='black' strokeWidth='3' />
            <path d='M75.4491 356.447H122.159' stroke='black' strokeWidth='3' />
            <path d='M93.3379 356.447V384.278' stroke='black' strokeWidth='3' />
            <path d='M93.3379 367.003H75.449' stroke='black' strokeWidth='3' />
            <path d='M86.7124 367.003V356.447' stroke='black' strokeWidth='3' />
            <path d='M86.7124 362.845L93.3379 362.845' stroke='black' strokeWidth='3' />
            <path d='M89.197 363.005V367.003' stroke='black' strokeWidth='3' />
            <path d='M89.197 364.604H86.7125' stroke='black' strokeWidth='3' />
          </g>
        </svg>
      </div>
      </main>
    </div>
  );
};

export default Home;
