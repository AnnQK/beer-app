import React from "react";
import { useQuery } from "react-query";
import { fetchWithSearch } from "../../../api/api";
import styles from "./Input.module.scss";

function Input({ changeSearchHandler }) {
    const [inputValue, setInputValue] = React.useState("");

    React.useEffect(() => {
        const handler = setTimeout(() => {
            changeSearchHandler(inputValue);
        }, 500);
        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    const changeHandler = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <form className={styles.form}>
            <input
                value={inputValue}
                onChange={changeHandler}
                type="text"
                placeholder="Beer Name"
                className={styles.input}
            />
        </form>
    );
}

export default Input;
