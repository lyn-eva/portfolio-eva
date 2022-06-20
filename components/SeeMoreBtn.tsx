import { Icon } from '@iconify/react';

type Props = {
  children: string;
};

const SeeMoreBtn: React.FC<Props> = ({ children }) => {
  return (
    <button className='flex items-center gap-1 tracking-wide group sm:gap-2'>
      <span className='border-darken-green border-b-[2px] group-hover:border-showy-violet leading-5 sm:text-lg sm:leading-6'>
        {children}
      </span>
      <Icon
        className='text-xl group-hover:translate-x-1 mt-[2px] duration-300 sm:text-2xl sm:mt-1'
        icon='bi:arrow-right'
      />
    </button>
  );
};

export default SeeMoreBtn;
