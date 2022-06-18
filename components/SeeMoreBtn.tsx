import { Icon } from '@iconify/react';

type Props = {
  children: string;
};

const SeeMoreBtn: React.FC<Props> = ({ children }) => {
  return (
    <button className='flex items-center gap-1 tracking-wide group'>
      <span className='border-darken-green border-b-[2px] group-hover:border-showy-violet leading-5 '>
        {children}
      </span>
      <Icon
        className='text-xl group-hover:translate-x-1 mt-[2px] duration-300'
        icon='bi:arrow-right'
      />
    </button>
  );
};

export default SeeMoreBtn;
