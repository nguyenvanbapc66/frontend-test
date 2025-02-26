import { useState } from 'react';

import { TagIcon } from '../assets/icons';

import { cn } from '../utils/helpers';

type TagProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  name?: string;
  active?: boolean;
};

const Tag = ({ onClick, ...props }: TagProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const isActive = props.active ?? isSelected;

  const handleClick = (e: React.MouseEvent) => {
    setIsSelected(true);
    onClick?.(e as any);
  };

  return (
    <button
      className={cn(
        'flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium leading-[1.125rem] bg-[#F2F4F8] text-[#6833FF]',
        'transition-all cursor-pointer',
        {
          'bg-[#6833FF] text-white': isActive,
        }
      )}
      onClick={handleClick}
    >
      <TagIcon
        className='transition-all'
        fill={isActive ? '#6833FF' : 'white'}
        stroke={isActive ? 'white' : '#6833FF'}
      />
      {props.name}
    </button>
  );
};

export default Tag;
