import axios from 'axios';
import { useEffect, useState } from 'react';
import { IMovie } from '../../interface/IMovie';
import Card from '../Card/Card';

const Form = () => {
  const [moviesData, setMoviesData] = useState<IMovie[]>([]);
  const [search, setSearch] = useState('code');
  const [sortGoodBad, setSortGoodBad] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=debe018b315b4afff20a1dc22c5e84f3&query=${search}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form action="">
          <input
            type="text"
            id="search-input"
            placeholder="Entrez le titre d'un film"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <input type="submit" value="Rechercher" />
        </form>

        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad" onClick={() => setSortGoodBad('goodToBad')}>
            Top<span>→</span>
          </div>
          <div className="btn-sort" id="badToGood" onClick={() => setSortGoodBad('badToGood')}>
            Flop<span>→</span>
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData
          .slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === 'goodToBad') {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === 'badToGood') {
              return a.vote_average - b.vote_average;
            } else {
              return -1;
            }
          })
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Form;
