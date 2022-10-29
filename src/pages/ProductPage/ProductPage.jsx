import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";

function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = React.useState({});
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers/${productId}`)
            .then((res) => res.json())
            .then((res) => setProduct(...res))
            .catch(() => {
                setHasError(true);
            });
    });

    return (
        <>
            {hasError && <p>We are working on this problem.</p>}
            <div className={styles.container}>
                <div className={styles["image-container"]}>
                    <img
                        src={
                            product.image_url ||
                            "https://bitsofco.de/content/images/2018/12/broken-1.png"
                        }
                        alt={product.name}
                        className={styles.image}
                    />
                </div>
                <div className={styles["name-container"]}>
                    <h1>{product.name}</h1>
                    {product.food_pairing && (
                        <>
                            <h3>Good with:</h3>
                            <ul className={styles.food}>
                                {product?.food_pairing.map((item) => {
                                    return <li key={item}>{item}</li>;
                                })}
                            </ul>
                        </>
                    )}
                </div>
                <div className={styles.info}>
                    <h3 className={styles.tagline}>{product.tagline}</h3>
                    <h2 className={styles.abv}>Alcohol By Volume: {product.abv}</h2>
                    <p className={styles.description}>
                        <span className={styles["description-title"]}>Description: </span>
                        {product.description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default ProductPage;
