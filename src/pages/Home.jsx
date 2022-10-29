import React from "react";
import { useQuery } from "react-query";
import ProductsList from "../components/ProductsList";
import Input from "../components/ui/Input";
import LoadingProducts from "../components/ui/LoadingProducts";
import LoadMoreBtn from "../components/ui/LoadMoreBtn";

function Home() {
    const [currentPage, setCurrentPage] = React.useState(1);
    const fetchProducts = async () => {
        const res = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=6`);
        return res.json();
    };

    const { data, isLoading, isSuccess, isError } = useQuery("products", fetchProducts);

    return (
        <div>
            <Input />
            {isError ? <div>Something went wrong...</div> : null}
            {isLoading ? <LoadingProducts /> : null}
            {isSuccess && (
                <>
                    <ProductsList isLoading={isLoading} items={data} />
                    <LoadMoreBtn />
                </>
            )}
        </div>
    );
}

export default Home;
