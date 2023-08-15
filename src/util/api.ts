const {VITE_APIKEY} = import.meta.env
const START_URL = `https://omdbapi.com?apikey=${VITE_APIKEY}`

const fetchApi = async ( url:string ) => {
  try {
    const data = await fetch(url)
    if (data.ok) return await data.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchMovies = ( s:string, page:number ) => {
  const data = fetchApi(`${START_URL}&s=${s}&page=${page}`)
  return data
}

export const fetchMovieDetial = ( id:string, ) => {
  const data = fetchApi(`${START_URL}&i=${id}&plot=full`)
  return data
}