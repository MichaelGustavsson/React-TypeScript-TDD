import { FormEvent, useRef } from 'react';

type SearchProps = {
  onSearch: (criteria: string) => void;
};

const Search = ({ onSearch }: SearchProps) => {
  const query = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = query.current!.value;
    onSearch(searchValue);
  };

  return (
    <section className='container'>
      <form onSubmit={handleSubmit}>
        <div className='search'>
          <input ref={query} type='text' placeholder='Skriv sök ord...' />
          <i className='fa-regular fa-magnifying-glass'></i>
        </div>
      </form>
    </section>
  );
};
export default Search;
