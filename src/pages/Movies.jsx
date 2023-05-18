import { Link } from "react-router-dom";

const Movies = () => {
return <div>
    {['movie1', 'movie2', 'movie3', 'movie4', 'movie5'].map(movie => {
        return <Link key={movie} to={`${movie}`}>
            {movie}
        </Link>
    })}
</div>
}

export default Movies;