import { useCallback, useEffect, useMemo, useState } from 'react';
import { Loader, SearchBar, SearchResultItem, Tag } from './components';

import { cn } from './utils/helpers';
import { fetchSkills } from './api';
import { useDebounce } from './hooks';
import errorImage from './assets/images/image-error.svg';
import noResultImage from './assets/images/image-no-result.svg';

const TAGS = ['Languages', 'Build', 'Design', 'Cloud'];

type SkillType = {
  category: string;
  description: string;
  image: string;
  title: string;
  url: string;
};

function App() {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [skills, setSkills] = useState<SkillType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const debounceSearchValue = useDebounce(searchValue);

  const footerText = useMemo(() => {
    if (isLoading) {
      return 'Searching...';
    }

    if (skills.length === 0) {
      return 'No result';
    }

    return skills.length === 1 ? '1 result' : `${skills.length} results`;
  }, [isLoading, skills.length]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setSelectedTag('');
  };

  const handleSearchClear = () => {
    if (!searchValue.length) {
      return;
    }

    handleSelectTag('');
  };

  const handleSelectTag = (tag: string) => {
    setSearchValue(tag);
    setSelectedTag(tag);
  };

  const getSkills = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await fetchSkills(debounceSearchValue);
      setSkills(data ?? []);
      setIsError(false);
    } catch (error) {
      setSkills([]);
      setIsError(true);
    }
    setIsLoading(false);
  }, [debounceSearchValue]);

  useEffect(() => {
    getSkills();
  }, [getSkills]);

  return (
    <div
      className={cn(
        'w-[43.125rem] h-[40.6875rem]',
        'rounded-2xl',
        'shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'
      )}
    >
      <div className='p-6'>
        <SearchBar
          value={searchValue}
          onChange={handleSearchInputChange}
          hasError={isError}
          onFocus={handleSearchClear}
        />
        <div className='flex gap-4 my-4'>
          {TAGS.map((tag) => (
            <Tag key={tag} name={tag} active={tag === selectedTag} onClick={() => handleSelectTag(tag)} />
          ))}
        </div>
        <div
          className={cn('overflow-auto h-[400px] flex flex-col gap-2.5', {
            'justify-center items-center': isLoading || !skills.length,
          })}
        >
          {isLoading ? <Loader /> : skills.map((skill) => <SearchResultItem key={skill.title} {...skill} />)}
          {!isLoading && !isError && !skills.length && (
            <img
              src={noResultImage}
              width={247}
              height={192}
              loading='lazy'
              sizes='(min-width: 0) 50vw'
              alt='Image No Result'
            />
          )}
          {!isLoading && isError && !skills.length && (
            <img
              src={errorImage}
              width={247}
              height={192}
              loading='lazy'
              sizes='(min-width: 0) 50vw'
              alt='Image Error'
            />
          )}
        </div>
      </div>
      <hr className='border-t-[#F2F4F8]' />
      <div className='px-6 py-[0.9375rem]'>
        {isError ? (
          <p className='text-[#ED2E7E]'>Something wrong happened but this is not your fault 🙂</p>
        ) : (
          <p className='font-medium text-[#999FAA]'>{footerText}</p>
        )}
      </div>
    </div>
  );
}

export default App;
