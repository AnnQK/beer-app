import React from "react";
import Skeleton from "../../ProductItem/Skeleton";
import styles from "../../ProductsList/ProductsList.module.scss";

function LoadingProducts() {
    const skeletons = [...new Array(6)].map((_, idx) => {
        return <Skeleton key={idx} />;
    });
    return <div className={styles.container}>{skeletons}</div>;
}

export default LoadingProducts;
