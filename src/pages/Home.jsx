import React from 'react';
import ProductsList from '../components/ProductsList';
import Input from '../components/ui/Input';
import Pagination from '../components/ui/Pagination';

function Home() {
  const [items, setItems] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const changePageHandler = (page) => {
    setCurrentPage(page);
  };
  const changeSearchHandler = (input) => {
    setSearchValue(input);
  };
  React.useEffect(() => {
    setIsLoading(true);
    const search =
      searchValue.length > 0
        ? `?beer_name=${searchValue.toLowerCase()}`
        : `?page=${currentPage}&per_page=6`;
    fetch(`https://api.punkapi.com/v2/beers${search}`)
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setItems(res);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });
  }, [searchValue, currentPage]);
  return (
    <div>
      <Input changeSearchHandler={changeSearchHandler} />
      {hasError ? (
        <div>Something went wrong...</div>
      ) : (
        <>
          <ProductsList isLoading={isLoading} items={items} />
          <Pagination changePageHandler={changePageHandler} currentPage={currentPage} />
        </>
      )}
    </div>
  );
}

export default Home;
