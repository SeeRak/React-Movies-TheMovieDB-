import axios from 'axios';
import { useEffect, useState } from 'react';

const Form = () => {
  const [moviesData, setMoviesData] = useState<Movie[]>([]);

  interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=debe018b315b4afff20a1dc22c5e84f3&query=star&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, []);

  return (
    <div className="form-component">
      <div className="form-container">
        <form action="">
          <input type="text" id="search-input" placeholder="Entrez le titre d'un film" />
          <input type="submit" value="Rechercher" />
        </form>

        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top<span>→</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Flop<span>→</span>
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData.map((movie) => (
          <h2 key={movie.id}>{movie.title}</h2>
        ))}
      </div>
    </div>
  );
};

export default Form;
