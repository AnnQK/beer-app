export const fetchAllProducts = async (perPage) => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=${perPage}`);
    return res.json();
}

export const fetchWithSearch = async (searchValue = '') => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchValue}`);
    return res.json();
}

export const fetchById = async (id) => {
    const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
    return res.json()

}