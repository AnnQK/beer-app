import React from "react";
import ProductItem from "../ProductItem";
import Skeleton from "../ProductItem/Skeleton";
import styles from "./ProductsList.module.scss";

function ProductsList({ items, isLoading }) {
    const products = items.map((item) => {
        return <ProductItem key={item.id} {...item} />;
    });
    const skeletons = [...new Array(6)].map((_, idx) => {
        return <Skeleton key={idx} />;
    });
    return <div className={styles.container}>{isLoading ? skeletons : products}</div>;
}

export default ProductsList;
