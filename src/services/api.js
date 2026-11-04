const API_KEY = "55396511-9fa47eb753a2484966d5aafba"




export function fetchImages(searchValue, page=1){
    const url = `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    return fetch(url).then((res) => res.json()).then((res) => res.hits)
}