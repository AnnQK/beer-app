import style from "./LoadMoreBtn.module.scss";
function LoadMoreBtn({ clickHandler }) {
    return (
        <button className={style.btn} onClick={clickHandler} type="button">
            Load More
        </button>
    );
}

export default LoadMoreBtn;
