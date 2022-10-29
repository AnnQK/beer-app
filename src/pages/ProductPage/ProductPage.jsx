import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchById } from "../../api/api";
import styles from "./ProductPage.module.scss";

function ProductPage() {
    const { productId } = useParams();

    const {
        data: productInfo,
        isError,
        isSuccess,
    } = useQuery(["product", productId], () => fetchById(productId));

    return (
        <>
            {isError ? <p>We are working on this problem.</p> : null}
            {isSuccess ? (
                <div className={styles.container}>
                    <div className={styles["image-container"]}>
                        <img
                            src={
                                productInfo[0].image_url ||
                                "https://bitsofco.de/content/images/2018/12/broken-1.png"
                            }
                            alt={productInfo[0].name}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles["name-container"]}>
                        <h1>{productInfo[0].name}</h1>
                        {productInfo[0].food_pairing && (
                            <>
                                <h3>Good with:</h3>
                                <ul className={styles.food}>
                                    {productInfo[0]?.food_pairing.map((item) => {
                                        return <li key={item}>{item}</li>;
                                    })}
                                </ul>
                            </>
                        )}
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.tagline}>{productInfo[0].tagline}</h3>
                        <h2 className={styles.abv}>Alcohol By Volume: {productInfo[0].abv}</h2>
                        <p className={styles.description}>
                            <span className={styles["description-title"]}>Description: </span>
                            {productInfo[0].description}
                        </p>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default ProductPage;
