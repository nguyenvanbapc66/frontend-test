import { LinkIcon } from '../assets/icons';

import { cn } from '../utils/helpers';

type SearchResultItemProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

const SearchResultItem = (props: SearchResultItemProps) => {
  const handleButtonClick = () => {
    window.open(props.url, '_blank');
  };

  return (
    <button
      className={cn(
        'flex items-center gap-5 rounded-xl p-3 pr-5 bg-white cursor-pointer hover:bg-[#F2F4F8]',
        'transition-all w-full group'
      )}
      onClick={handleButtonClick}
    >
      <img
        className='w-[4.75rem] aspect-square rounded-[0.625rem]'
        src={props.image}
        loading='lazy'
        sizes='(min-width: 0) 50vw'
        alt='Skill Logo'
      />
      <div className='w-full max-w-[29.25rem] text-left'>
        <p className='text-xl'>{props.title}</p>
        <p className='pt-2 text-[#999FAA] whitespace-nowrap overflow-hidden text-ellipsis'>{props.description}</p>
      </div>
      <div className='opacity-0 group-hover:opacity-100 transition-all'>
        <LinkIcon />
      </div>
    </button>
  );
};

export default SearchResultItem;
