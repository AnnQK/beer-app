import React from "react";
import { useQuery } from "react-query";
import { fetchAllProducts, fetchWithSearch } from "../api/api";
import ProductsList from "../components/ProductsList";
import Input from "../components/ui/Input";
import LoadingProducts from "../components/ui/LoadingProducts";
import LoadMoreBtn from "../components/ui/LoadMoreBtn";

function Home() {
    const [perPage, setPerPage] = React.useState(6);

    const { data, isLoading, isSuccess, isError } = useQuery(
        ["products", perPage],
        () => fetchAllProducts(perPage),
        { keepPreviousData: true },
    );

    const showMoreHandler = () => {
        setPerPage((prev) => prev + 6);
    };

    return (
        <div>
            <Input />
            {isError ? <div>Something went wrong...</div> : null}
            {isLoading ? <LoadingProducts /> : null}
            {isSuccess && (
                <>
                    <ProductsList isLoading={isLoading} items={data} />
                    <LoadMoreBtn clickHandler={showMoreHandler} />
                </>
            )}
        </div>
    );
}

export default Home;
