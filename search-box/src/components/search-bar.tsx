import { SearchIcon } from '../assets/icons';

import { cn } from '../utils/helpers';

type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

const SearchBar = ({ className, hasError, ...props }: SearchBarProps) => {
  return (
    <div className='relative'>
      <SearchIcon className='absolute top-1/2 left-6 -translate-y-1/2' />
      <input
        {...props}
        className={cn(
          'w-full pl-15 pr-6 py-[1.5625rem] rounded-xl border-0 outline-0 bg-[#F2F4F8] text-black text-xl',
          'focus-within:outline-[0.1875rem] focus-within:outline-[#6833FF]',
          'transition-all',
          className,
          { 'outline-[0.1875rem] outline-[#ED2E7E] focus-within:outline-[#ED2E7E]': hasError }
        )}
      />
    </div>
  );
};

export default SearchBar;
