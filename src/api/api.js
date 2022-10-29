export const fetchProducts = async (perPage, searchValue = '') => {
    let res;
    if (searchValue) {
        res = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchValue}`);
    } else {
        res = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=${perPage}`);
    }
    return res.json();
}

export const fetchById = async (id) => {
    const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
    return res.json()

}