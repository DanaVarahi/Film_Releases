import Film from './Film'

const FilmList = ({films}) => {
    
    const filmNodes = films.map(film => {
        return(
        <Film key={film.id} url={film.url}>{film.name}</Film>
        )
    })
    
    return (
        <>
            <h2>Upcoming Film Releases for UK</h2>
            <ul>
                {filmNodes}
            </ul>
        </>
    )
}

export default FilmList